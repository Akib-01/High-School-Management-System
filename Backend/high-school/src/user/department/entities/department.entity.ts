import { Class } from 'src/user/class/entities/class.entity';
import { Course } from 'src/user/courses/entities/course.entity';
import { Teacher } from 'src/user/teacher/entities/teacher.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Department')
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => Course, (course) => course.department)
  courses: Course[];

  @OneToMany(() => Class, (Class) => Class.department)
  classes: Class[];

  @ManyToOne(() => Teacher, (teacher) => teacher.department)
  headOfDepartment: Teacher;
}
