import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Class } from '../class/entities/class.entity';
import { Course } from '../courses/entities/course.entity';
import { Section } from '../section/entities/section.entity';
import { Student } from '../student/entities/student.entity';
import { Result } from './entities/result.entity';
import { ResultController } from './result.controller';
import { ResultService } from './result.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Student, Result, Class, Course, Section]),
  ],
  controllers: [ResultController],
  providers: [ResultService],
})
export class ResultModule {}
