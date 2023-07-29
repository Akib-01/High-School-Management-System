import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Class } from '../class/entities/class.entity';
import { Teacher } from '../teacher/entities/teacher.entity';
import { CreateSectionDto } from './dto/create-section.dto';
import { Section } from './entities/section.entity';

@Injectable()
export class SectionService {
  constructor(
    @InjectRepository(Section)
    private readonly secRepo: Repository<Section>,
    @InjectRepository(Teacher)
    private readonly teacherrepo: Repository<Teacher>,
    @InjectRepository(Class)
    private readonly classrepo: Repository<Class>,
  ) {}
  async create(Dto: CreateSectionDto): Promise<Section> {
    const { teacherId, classId, ...Data } = Dto;
    const teacher = await this.teacherrepo.findOne({
      where: { id: teacherId },
    });
    const cl = await this.classrepo.findOne({
      where: { id: classId },
    });
    const sec = new Section();
    sec.id = Data.id;
    sec.name = Data.name;
    sec.class = cl;
    sec.teacher = teacher;

    return await this.secRepo.save(sec);
  }

  findAll(): Promise<Section[]> {
    return this.secRepo.find({
      relations: ['Teacher', 'Class'],
    });
  }

  findOne(id: number) {
    return this.secRepo.findOneBy({ id });
  }

  async update(id: number, Dto: CreateSectionDto): Promise<Section> {
    const { teacherId, classId, ...Data } = Dto;
    const teacher = await this.teacherrepo.findOne({
      where: { id: teacherId },
    });
    const cl = await this.classrepo.findOne({
      where: { id: classId },
    });

    const sec = await this.secRepo.findOne({
      where: { id },
      relations: ['Teacher', 'Class'],
    });
    sec.name = Data.name;
    sec.teacher = teacher;
    sec.class = cl;

    return await this.secRepo.save(sec);
  }

  remove(id: number) {
    return this.secRepo.delete(id);
  }
}
