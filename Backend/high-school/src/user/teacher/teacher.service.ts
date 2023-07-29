import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from '../department/entities/department.entity';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { Teacher } from './entities/teacher.entity';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher)
    private readonly teacherRepo: Repository<Teacher>,
    @InjectRepository(Department)
    private readonly deptRepo: Repository<Department>,
  ) {}
  async create(Dto: CreateTeacherDto): Promise<Teacher> {
    const { departmentId, ...Data } = Dto;
    const dept = await this.deptRepo.findOne({
      where: { id: departmentId },
    });

    const teacher = new Teacher();
    teacher.id = Data.id;
    teacher.firstName = Data.firstName;
    teacher.lastName = Data.lastName;
    teacher.email = Data.email;
    teacher.phoneNumber = Data.phoneNumber;
    teacher.hireDate = Data.hireDate;
    teacher.role = Data.role;
    teacher.department = dept;

    return await this.teacherRepo.save(teacher);
  }

  findAll(): Promise<Teacher[]> {
    return this.teacherRepo.find({
      relations: ['Department'],
    });
  }

  findOne(id: number) {
    return this.teacherRepo.findOneBy({ id });
  }

  async update(id: number, Dto: CreateTeacherDto): Promise<Teacher> {
    const { departmentId, ...Data } = Dto;
    const dept = await this.deptRepo.findOne({
      where: { id: departmentId },
    });

    const teacher = await this.teacherRepo.findOne({
      where: { id },
      relations: ['Department'],
    });
    teacher.firstName = Data.firstName;
    teacher.lastName = Data.lastName;
    teacher.email = Data.email;
    teacher.phoneNumber = Data.phoneNumber;
    teacher.hireDate = Data.hireDate;
    teacher.role = Data.role;
    teacher.department = dept;

    return await this.teacherRepo.save(teacher);
  }

  remove(id: number) {
    return this.teacherRepo.delete(id);
  }
}
