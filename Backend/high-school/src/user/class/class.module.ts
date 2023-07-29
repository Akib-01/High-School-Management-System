import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department } from '../department/entities/department.entity';
import { Result } from '../result/entities/result.entity';
import { Section } from '../section/entities/section.entity';
import { Student } from '../student/entities/student.entity';
import { Teacher } from '../teacher/entities/teacher.entity';
import { ClassController } from './class.controller';
import { ClassService } from './class.service';
import { Class } from './entities/class.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Section, Class, Result, Student]),
    TypeOrmModule.forFeature([Teacher]),
    TypeOrmModule.forFeature([Department]),
  ],
  controllers: [ClassController],
  providers: [ClassService],
})
export class ClassModule {}
