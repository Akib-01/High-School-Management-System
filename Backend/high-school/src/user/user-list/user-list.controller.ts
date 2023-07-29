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
import { CreateUserListDto } from './dto/create-user-list.dto';
import { UserListService } from './user-list.service';

@Controller('user-list')
export class UserListController {
  constructor(private readonly userListService: UserListService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @Post('/insert')
  create(@Body() Dto: CreateUserListDto) {
    return this.userListService.create(Dto);
  }
  @UsePipes(new ValidationPipe())
  @Get('/get')
  findAll() {
    return this.userListService.findAll();
  }
  @UsePipes(new ValidationPipe())
  @Get('/get/:id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.userListService.findOne(+id);
  }
  @UsePipes(new ValidationPipe())
  @Put('/update/:id')
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body() Dto: CreateUserListDto,
  ) {
    return this.userListService.update(+id, Dto);
  }
  @UsePipes(new ValidationPipe())
  @Delete('/delete/:id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.userListService.remove(+id);
  }
}
