//Для примера приложения UsersServiceпросто поддерживает жестко закодированный в памяти список пользователей 
// и метод поиска для извлечения одного по имени пользователя. 
// В реальном приложении это то место, где будет построена модель пользователя и слой сохранения, 
// используя библиотеку по вашему выбору (например, TypeORM, Sequelize, Mongoose и т. д.).

import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
