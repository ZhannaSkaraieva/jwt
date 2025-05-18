
//добавление UsersServiceв массив экспортов декоратора @Module, чтобы он был виден за пределами этого модуля
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
