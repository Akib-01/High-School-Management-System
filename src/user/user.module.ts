import { Module } from '@nestjs/common';

import { CoursesModule } from './courses/courses.module';
import { DepartmentModule } from './department/department.module';
import { NoticeModule } from './notice/notice.module';
import { ResultModule } from './result/result.module';
import { SectionModule } from './section/section.module';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { UserListModule } from './user-list/user-list.module';
import { ClassModule } from './class/class.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    NoticeModule,
    ResultModule,
    StudentModule,
    TeacherModule,
    DepartmentModule,
    CoursesModule,
    SectionModule,
    UserListModule,
    ClassModule,
  ],
})
export class UserModule {}
