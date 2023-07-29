import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from '../department/entities/department.entity';
import { Teacher } from '../teacher/entities/teacher.entity';
import { CreateClassDto } from './dto/create-class.dto';
import { Class } from './entities/class.entity';

@Injectable()
export class ClassService {
  constructor(
    @InjectRepository(Class)
    private readonly classrepo: Repository<Class>,
    @InjectRepository(Department)
    private readonly deptrepo: Repository<Department>,
    @InjectRepository(Teacher)
    private readonly teacherrepo: Repository<Teacher>,
  ) {}
  async create(createClassDto: CreateClassDto): Promise<Class> {
    const { departmentId, teacherId, ...classData } = createClassDto;
    const dept = await this.deptrepo.findOne({ where: { id: departmentId } });
    const teacher = await this.teacherrepo.findOne({
      where: { id: teacherId },
    });
    const cl = new Class();
    cl.id = classData.id;
    cl.name = classData.name;
    cl.year = classData.year;
    cl.department = dept;
    cl.teacher = teacher;

    return await this.classrepo.save(cl);
  }

  findAll(): Promise<Class[]> {
    return this.classrepo.find({
      relations: ['Department', 'Teacher'],
    });
  }

  findOne(id: number) {
    return this.classrepo.findOneBy({ id });
  }

  async update(id: number, createClassDto: CreateClassDto): Promise<Class> {
    const { departmentId, teacherId, ...classData } = createClassDto;
    const dept = await this.deptrepo.findOne({
      where: { id: departmentId },
    });
    const teacher = await this.teacherrepo.findOne({
      where: { id: teacherId },
    });

    const cl = await this.classrepo.findOne({
      where: { id },
      relations: ['Department', 'Teacher'],
    });

    cl.name = classData.name;
    cl.year = classData.year;
    cl.department = dept;
    cl.teacher = teacher;

    return await this.classrepo.save(cl);
  }

  remove(id: number) {
    return this.classrepo.delete(id);
  }
}
