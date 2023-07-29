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
import { CreateSectionDto } from './dto/create-section.dto';
import { SectionService } from './section.service';

@Controller('section')
export class SectionController {
  constructor(private readonly sectionService: SectionService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @Post('/insert')
  create(@Body() Dto: CreateSectionDto) {
    return this.sectionService.create(Dto);
  }
  @UsePipes(new ValidationPipe())
  @Get('/get')
  findAll() {
    return this.sectionService.findAll();
  }
  @UsePipes(new ValidationPipe())
  @Get('/get/:id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.sectionService.findOne(+id);
  }
  @UsePipes(new ValidationPipe())
  @Put('/update/:id')
  update(@Param('id', ParseIntPipe) id: string, @Body() Dto: CreateSectionDto) {
    return this.sectionService.update(+id, Dto);
  }
  @UsePipes(new ValidationPipe())
  @Delete('/delete/:id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.sectionService.remove(+id);
  }
}
