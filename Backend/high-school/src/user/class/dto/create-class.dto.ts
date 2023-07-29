import {
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateClassDto {
  @IsInt()
  @IsPositive()
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsInt()
  @Min(1900) // Assuming the minimum value for the year is 1900
  @Max(new Date().getFullYear()) // Assuming the maximum value for the year is the current year
  year: number;

  @IsInt()
  @IsPositive()
  departmentId: number;

  @IsInt()
  @IsPositive()
  teacherId: number;
}
