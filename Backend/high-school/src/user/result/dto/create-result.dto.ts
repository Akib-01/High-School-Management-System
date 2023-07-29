import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateResultDto {
  @IsInt()
  @IsPositive()
  id: number;

  @IsInt()
  @IsPositive()
  studentId: number;

  @IsInt()
  @IsPositive()
  courseId: number;

  @IsInt()
  @IsPositive()
  classId: number;

  @IsInt()
  @IsPositive()
  sectionId: number;

  @IsNumber()
  @Min(0)
  @Max(100)
  marksObtained: number;

  @IsNumber()
  @Min(0)
  @Max(100)
  totalMarks: number;

  @IsString()
  @IsNotEmpty()
  grade: string;

  @IsDate()
  date: Date;

  @IsInt()
  @IsPositive()
  rank: number;

  @IsString()
  @IsNotEmpty()
  term: string;
}
