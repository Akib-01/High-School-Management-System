import {
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';

export class CreateDepartmentDto {
  @IsInt()
  @IsPositive()
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 20000) // Assuming the description should be between 10 to 200 characters
  description: string;

  @IsInt()
  @IsPositive()
  headOfDepartmentId: number;
}
