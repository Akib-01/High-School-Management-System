import { Module } from '@nestjs/common';
import { UserListController } from './user-list.controller';
import { UserListService } from './user-list.service';

@Module({
  controllers: [UserListController],
  providers: [UserListService],
})
export class UserListModule {}
