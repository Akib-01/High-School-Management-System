import { Class } from 'src/user/class/entities/class.entity';
import { Result } from 'src/user/result/entities/result.entity';
import { Section } from 'src/user/section/entities/section.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Student')
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  dateOfBirth: Date;

  @Column()
  gender: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @Column()
  address: string;

  @ManyToOne(() => Class, (Class) => Class.students)
  class: Class;

  @ManyToOne(() => Section, (section) => section.students)
  section: Section;

  @OneToMany(() => Result, (result) => result.student)
  results: Result[];
}
