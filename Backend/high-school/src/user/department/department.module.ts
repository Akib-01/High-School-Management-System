import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Class } from '../class/entities/class.entity';
import { Course } from '../courses/entities/course.entity';
import { Teacher } from '../teacher/entities/teacher.entity';
import { DepartmentController } from './department.controller';
import { DepartmentService } from './department.service';
import { Department } from './entities/department.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Class, Department, Course, Teacher])],
  controllers: [DepartmentController],
  providers: [DepartmentService],
})
export class DepartmentModule {}
