import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessags() {}

  @Post()
  createMessages() {}

  @Get('/:id')
  getMessages() {}
}
