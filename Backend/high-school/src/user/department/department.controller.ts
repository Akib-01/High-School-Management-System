import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department.dto';

@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @UsePipes(new ValidationPipe())
  @Post('/insert')
  create(@Body() Dto: CreateDepartmentDto) {
    return this.departmentService.create(Dto);
  }
  @UsePipes(new ValidationPipe())
  @Get('/get')
  findAll() {
    return this.departmentService.findAll();
  }
  @UsePipes(new ValidationPipe())
  @Get('/get/:id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.departmentService.findOne(+id);
  }
  @UsePipes(new ValidationPipe())
  @Put('/update/:id')
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body() Dto: CreateDepartmentDto,
  ) {
    return this.departmentService.update(+id, Dto);
  }
  @UsePipes(new ValidationPipe())
  @Delete('/delete/:id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.departmentService.remove(+id);
  }
}
