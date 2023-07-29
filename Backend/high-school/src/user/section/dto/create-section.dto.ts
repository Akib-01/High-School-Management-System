import { IsInt, IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class CreateSectionDto {
  @IsInt()
  @IsPositive()
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsInt()
  @IsPositive()
  classId: number;

  @IsInt()
  @IsPositive()
  teacherId: number;
}
