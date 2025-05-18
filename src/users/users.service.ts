
import { Injectable } from '@nestjs/common';

// Это должен быть настоящий класс/интерфейс, представляющий сущность пользователя
export type User = any;

//UsersServiceпросто поддерживает жестко закодированный в памяти список пользователей 
// и метод поиска для извлечения одного по имени пользователя.
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
