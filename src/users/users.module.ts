import { Module } from '@nestjs/common';
import { UsersService } from './users.service';


@Module({
  providers: [UsersService],
  //добавление UsersServiceв массив экспортов декоратора @Module, чтобы он был виден за пределами этого модуля
  exports: [UsersService],
})
export class UsersModule {}
