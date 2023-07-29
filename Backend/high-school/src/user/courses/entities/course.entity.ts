import { Department } from 'src/user/department/entities/department.entity';
import { Result } from 'src/user/result/entities/result.entity';
import { Teacher } from 'src/user/teacher/entities/teacher.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Course')
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => Department, (department) => department.courses)
  department: Department;

  @ManyToOne(() => Teacher, (teacher) => teacher.courses)
  teacher: Teacher;

  @OneToMany(() => Result, (result) => result.course)
  result: Result;
}
