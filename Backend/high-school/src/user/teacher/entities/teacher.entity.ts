import { Class } from 'src/user/class/entities/class.entity';
import { Course } from 'src/user/courses/entities/course.entity';
import { Department } from 'src/user/department/entities/department.entity';
import { Section } from 'src/user/section/entities/section.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity('Teacher')
export class Teacher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;
  @Column({ type: 'date' })
  hireDate: Date;

  @Column()
  role: string;

  @OneToMany(() => Course, (course) => course.teacher)
  courses: Course[];

  @OneToMany(() => Class, (Class) => Class.teacher)
  classes: Class[];

  @OneToMany(() => Section, (section) => section.teacher)
  sections: Section[];

  @ManyToOne(() => Department, (department) => department.headOfDepartment)
  department: Department;
}
