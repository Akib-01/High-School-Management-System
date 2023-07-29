import { Class } from 'src/user/class/entities/class.entity';
import { Course } from 'src/user/courses/entities/course.entity';
import { Section } from 'src/user/section/entities/section.entity';
import { Student } from 'src/user/student/entities/student.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Result')
export class Result {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Student, (student) => student.results)
  student: Student;

  @ManyToOne(() => Course, (course) => course.result)
  course: Course;

  @ManyToOne(() => Class, (Class) => Class.result)
  class: Class;

  @ManyToOne(() => Section, (section) => section.result)
  section: Section;

  @Column({ type: 'float' })
  marksObtained: number;

  @Column({ type: 'float' })
  totalMarks: number;

  @Column()
  grade: string;

  @Column()
  date: Date;

  @Column()
  rank: number;

  @Column()
  term: string;
}
