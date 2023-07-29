import { Department } from 'src/user/department/entities/department.entity';
import { Result } from 'src/user/result/entities/result.entity';
import { Section } from 'src/user/section/entities/section.entity';
import { Student } from 'src/user/student/entities/student.entity';
import { Teacher } from 'src/user/teacher/entities/teacher.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Class')
export class Class {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  year: number;

  @ManyToOne(() => Department, (department) => department.classes)
  department: Department;

  @OneToMany(() => Section, (section) => section.class)
  sections: Section[];

  @OneToMany(() => Result, (result) => result.class)
  result: Result[];

  @OneToMany(() => Student, (students) => students.class)
  students: Student[];

  @ManyToOne(() => Teacher, (teacher) => teacher.classes)
  teacher: Teacher;
}
