import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Class } from '../class/entities/class.entity';
import { Result } from '../result/entities/result.entity';
import { Section } from '../section/entities/section.entity';
import { Student } from './entities/student.entity';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
  imports: [TypeOrmModule.forFeature([Class, Section, Result, Student])],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
