import { Class } from 'src/user/class/entities/class.entity';
import { Result } from 'src/user/result/entities/result.entity';
import { Student } from 'src/user/student/entities/student.entity';
import { Teacher } from 'src/user/teacher/entities/teacher.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Section')
export class Section {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Class, (Class) => Class.sections)
  class: Class;

  @ManyToOne(() => Teacher, (teacher) => teacher.sections)
  teacher: Teacher;

  @OneToMany(() => Student, (students) => students.section)
  students: Student[];

  @OneToMany(() => Result, (result) => result.class)
  result: Result[];
}
