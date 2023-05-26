import { Module } from '@nestjs/common';
import 'reflect-metadata';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
@Module({
  imports: [UserModule, AdminModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
