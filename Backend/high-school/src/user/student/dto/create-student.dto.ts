// src/user/student/dto/create-student.dto.ts

import { IsDate, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateStudentDto {
  id: number;
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsDate()
  dateOfBirth: Date;

  @IsNotEmpty()
  @IsString()
  gender: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  phoneNumber: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  classId: number;
  sectionId: number;
}
