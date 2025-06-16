import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

export type User = any; 

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john.doe',
      password: '', 
    },
    {
      userId: 2,
      username: 'maria.silva',
      password: '',
    },
  ];

  constructor() {
    this.hashTestPasswords(); 
  }

  private async hashTestPasswords() {
    for (const user of this.users) {
      user.password = await bcrypt.hash('123password', 10);
    }
    console.log('Successfully hashed test passwords.');
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}