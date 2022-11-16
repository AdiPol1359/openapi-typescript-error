import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiCreatedResponse({
    description: 'Get all users',
    type: UserDto,
    isArray: true,
  })
  getAllUsers(): UserDto[] {
    return this.usersService.getAllUsers();
  }
}
