// src/user/teacher/dto/create-teacher.dto.ts

import {
  IsDate,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
} from 'class-validator';

// Sample enum for teacher roles
enum TeacherRole {
  ASSISTANT = 'Assistant',
  LECTURER = 'Lecturer',
  PROFESSOR = 'Professor',
}

export class CreateTeacherDto {
  @IsInt()
  @IsPositive()
  id: number;

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  phoneNumber: string;

  @IsInt()
  @IsPositive()
  departmentId: number;

  @IsDate()
  hireDate: Date;

  @IsEnum(TeacherRole)
  role: TeacherRole;
}
