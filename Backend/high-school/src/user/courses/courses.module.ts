import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department } from '../department/entities/department.entity';
import { Result } from '../result/entities/result.entity';
import { Teacher } from '../teacher/entities/teacher.entity';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { Course } from './entities/course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Department, Course, Result, Teacher])],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
