import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/user-list.entity';
import { UserListController } from './user-list.controller';
import { UserListService } from './user-list.service';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [UserListController],
  providers: [UserListService],
})
export class UserListModule {}
