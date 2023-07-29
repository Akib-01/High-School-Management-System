import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Class } from '../class/entities/class.entity';
import { Course } from '../courses/entities/course.entity';
import { Section } from '../section/entities/section.entity';
import { Student } from '../student/entities/student.entity';
import { CreateResultDto } from './dto/create-result.dto';
import { Result } from './entities/result.entity';

@Injectable()
export class ResultService {
  constructor(
    @InjectRepository(Result)
    private readonly resultRepo: Repository<Result>,
    @InjectRepository(Student)
    private readonly studentrepo: Repository<Student>,
    @InjectRepository(Course)
    private readonly courserepo: Repository<Course>,
    @InjectRepository(Class)
    private readonly classrepo: Repository<Class>,
    @InjectRepository(Section)
    private readonly sectionrepo: Repository<Section>,
  ) {}
  async create(Dto: CreateResultDto): Promise<Result> {
    const { studentId, courseId, classId, sectionId, ...Data } = Dto;
    const student = await this.studentrepo.findOne({
      where: { id: studentId },
    });
    const course = await this.courserepo.findOne({
      where: { id: courseId },
    });
    const cl = await this.classrepo.findOne({
      where: { id: classId },
    });
    const sec = await this.sectionrepo.findOne({
      where: { id: sectionId },
    });
    const res = new Result();
    res.id = Data.id;
    res.marksObtained = Data.marksObtained;
    res.grade = Data.grade;
    res.date = Data.date;
    res.rank = Data.rank;
    res.term = Data.term;
    res.course = course;
    res.class = cl;
    res.section = sec;
    res.student = student;

    return await this.resultRepo.save(res);
  }

  findAll(): Promise<Result[]> {
    return this.resultRepo.find({
      relations: ['Student', 'Course', 'Class', 'Section'],
    });
  }

  findOne(id: number) {
    return this.resultRepo.findOneBy({ id });
  }

  async update(id: number, Dto: CreateResultDto): Promise<Result> {
    const { studentId, courseId, classId, sectionId, ...Data } = Dto;

    const student = await this.studentrepo.findOne({
      where: { id: studentId },
    });
    const course = await this.courserepo.findOne({
      where: { id: courseId },
    });
    const cl = await this.classrepo.findOne({
      where: { id: classId },
    });
    const sec = await this.sectionrepo.findOne({
      where: { id: sectionId },
    });

    const res = await this.resultRepo.findOne({
      where: { id },
      relations: ['Student', 'Course', 'Class', 'Section'],
    });

    res.marksObtained = Data.marksObtained;
    res.grade = Data.grade;
    res.date = Data.date;
    res.rank = Data.rank;
    res.term = Data.term;
    res.course = course;
    res.class = cl;
    res.section = sec;
    res.student = student;

    return await this.resultRepo.save(res);
  }

  remove(id: number) {
    return this.resultRepo.delete(id);
  }
}
