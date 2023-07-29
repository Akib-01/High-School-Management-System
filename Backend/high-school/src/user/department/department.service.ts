import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Teacher } from '../teacher/entities/teacher.entity';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { Department } from './entities/department.entity';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private readonly deptrepo: Repository<Department>,
    @InjectRepository(Teacher)
    private readonly teacherrepo: Repository<Teacher>,
  ) {}
  async create(createDepartmentDto: CreateDepartmentDto): Promise<Department> {
    const { headOfDepartmentId, ...Data } = createDepartmentDto;
    const teacher = await this.teacherrepo.findOne({
      where: { id: headOfDepartmentId },
    });
    const dept = new Department();
    dept.id = Data.id;
    dept.name = Data.name;
    dept.description = Data.description;
    dept.headOfDepartment = teacher;

    return await this.deptrepo.save(dept);
  }

  findAll(): Promise<Department[]> {
    return this.deptrepo.find({
      relations: ['Teacher'],
    });
  }

  findOne(id: number) {
    return this.deptrepo.findOneBy({ id });
  }

  async update(
    id: number,
    createDepartmentDto: CreateDepartmentDto,
  ): Promise<Department> {
    const { headOfDepartmentId, ...Data } = createDepartmentDto;
    const teacher = await this.teacherrepo.findOne({
      where: { id: headOfDepartmentId },
    });

    const dept = await this.deptrepo.findOne({
      where: { id },
      relations: ['Teacher'],
    });

    dept.name = Data.name;
    dept.description = Data.description;
    dept.headOfDepartment = teacher;

    return await this.deptrepo.save(dept);
  }

  remove(id: number) {
    return this.deptrepo.delete(id);
  }
}
