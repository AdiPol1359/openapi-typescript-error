import { Injectable } from '@nestjs/common';
import type { UserDto } from './dto/user.dto';

const users: UserDto[] = [
  { firstName: 'a', lastName: 'b', email: 'c' },
  { firstName: 'd', lastName: 'e', email: 'f' },
  { firstName: 'g', lastName: 'h', email: 'i' },
];

@Injectable()
export class UsersService {
  getAllUsers(): UserDto[] {
    return users;
  }
}
