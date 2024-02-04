import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Param,
  Query,
  Delete,
} from '@nestjs/common';

import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { emit } from 'process';

@Controller('auth')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    this.userService.create(body.email, body.password);
  }

  @Get('/:id')
  findUser(@Param('id') id: string) {
    return this.userService.findOne(parseInt(id));
  }

  @Get('')
  findAllUser(@Query('email') emial: string) {
    return this.userService.find(emial);
  }

  @Delete()
  removeUser(@Param('id') id: string) {
    return this.userService.remove(parseInt(id));
  }
}
