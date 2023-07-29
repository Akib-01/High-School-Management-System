import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from '../department/entities/department.entity';
import { Result } from '../result/entities/result.entity';
import { Teacher } from '../teacher/entities/teacher.entity';
import { CreateCourseDto } from './dto/create-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly courserepo: Repository<Course>,
    @InjectRepository(Department)
    private readonly deptrepo: Repository<Department>,
    @InjectRepository(Teacher)
    private readonly teacherrepo: Repository<Teacher>,
    @InjectRepository(Result)
    private readonly resultrepo: Repository<Result>,
  ) {}
  async create(CreateCourseDto: CreateCourseDto): Promise<Course> {
    const { departmentId, teacherId, resultId, ...Data } = CreateCourseDto;
    const dept = await this.deptrepo.findOne({ where: { id: departmentId } });
    const teacher = await this.teacherrepo.findOne({
      where: { id: teacherId },
    });
    const res = await this.resultrepo.findOne({
      where: { id: resultId },
    });
    const course = new Course();
    course.id = Data.id;
    course.name = Data.name;
    course.description = Data.description;
    course.department = dept;
    course.result = res;
    course.teacher = teacher;

    return await this.courserepo.save(course);
  }

  findAll(): Promise<Course[]> {
    return this.courserepo.find({
      relations: ['Department', 'Teacher', 'Result'],
    });
  }

  findOne(id: number) {
    return this.courserepo.findOneBy({ id });
  }

  async update(id: number, createCourseDto: CreateCourseDto): Promise<Course> {
    const { departmentId, teacherId, resultId, ...Data } = createCourseDto;
    const dept = await this.deptrepo.findOne({
      where: { id: departmentId },
    });
    const teacher = await this.teacherrepo.findOne({
      where: { id: teacherId },
    });
    const result = await this.resultrepo.findOne({ where: { id: resultId } });

    const course = await this.courserepo.findOne({
      where: { id },
      relations: ['Department', 'Teacher', 'Result'],
    });

    course.name = Data.name;
    course.description = Data.description;
    course.department = dept;
    course.teacher = teacher;
    course.result = result;

    return await this.courserepo.save(course);
  }

  remove(id: number) {
    return this.courserepo.delete(id);
  }
}
