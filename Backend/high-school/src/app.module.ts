import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'reflect-metadata';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    UserModule,
    AdminModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'samaspara',
      autoLoadEntities: true,
      synchronize: true,
      entities: [__dirname + 'entities/**/*.entity.ts'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
