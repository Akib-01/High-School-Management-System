import {
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';

export class CreateCourseDto {
  @IsInt()
  @IsPositive()
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 20000)
  description: string;

  @IsInt()
  @IsPositive()
  departmentId: number;

  @IsInt()
  @IsPositive()
  teacherId: number;

  @IsInt()
  @IsPositive()
  resultId: number;
}
