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
import { CreateResultDto } from './dto/create-result.dto';
import { ResultService } from './result.service';

@Controller('result')
export class ResultController {
  constructor(private readonly resultService: ResultService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @Post('/insert')
  create(@Body() Dto: CreateResultDto) {
    return this.resultService.create(Dto);
  }
  @UsePipes(new ValidationPipe())
  @Get('/get')
  findAll() {
    return this.resultService.findAll();
  }
  @UsePipes(new ValidationPipe())
  @Get('/get/:id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.resultService.findOne(+id);
  }
  @UsePipes(new ValidationPipe())
  @Put('/update/:id')
  update(@Param('id', ParseIntPipe) id: string, @Body() Dto: CreateResultDto) {
    return this.resultService.update(+id, Dto);
  }
  @UsePipes(new ValidationPipe())
  @Delete('/delete/:id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.resultService.remove(+id);
  }
}
