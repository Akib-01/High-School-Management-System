import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Class } from '../class/entities/class.entity';
import { Section } from '../section/entities/section.entity';
import { CreateStudentDto } from './dto/create-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepo: Repository<Student>,
    @InjectRepository(Section)
    private readonly secrepo: Repository<Section>,
    @InjectRepository(Class)
    private readonly classrepo: Repository<Class>,
  ) {}
  async create(Dto: CreateStudentDto): Promise<Student> {
    const { sectionId, classId, ...Data } = Dto;
    const sec = await this.secrepo.findOne({
      where: { id: sectionId },
    });
    const cl = await this.classrepo.findOne({
      where: { id: classId },
    });
    const st = new Student();
    st.id = Data.id;
    st.firstName = Data.firstName;
    st.lastName = Data.lastName;
    st.address = Data.address;
    st.dateOfBirth = Data.dateOfBirth;
    st.gender = Data.gender;
    st.email = Data.email;
    st.phoneNumber = Data.phoneNumber;
    st.class = cl;
    st.section = sec;

    return await this.studentRepo.save(st);
  }

  findAll(): Promise<Student[]> {
    return this.studentRepo.find({
      relations: ['Section', 'Class'],
    });
  }

  findOne(id: number) {
    return this.studentRepo.findOneBy({ id });
  }

  async update(id: number, Dto: CreateStudentDto): Promise<Student> {
    const { sectionId, classId, ...Data } = Dto;
    const sec = await this.secrepo.findOne({
      where: { id: sectionId },
    });
    const cl = await this.classrepo.findOne({
      where: { id: classId },
    });

    const st = await this.studentRepo.findOne({
      where: { id },
      relations: ['Section', 'Class'],
    });
    st.firstName = Data.firstName;
    st.lastName = Data.lastName;
    st.address = Data.address;
    st.dateOfBirth = Data.dateOfBirth;
    st.gender = Data.gender;
    st.email = Data.email;
    st.phoneNumber = Data.phoneNumber;
    st.class = cl;
    st.section = sec;

    return await this.studentRepo.save(st);
  }

  remove(id: number) {
    return this.studentRepo.delete(id);
  }
}
