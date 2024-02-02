import { Controller, Get } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';

@Controller('users')
export class UsersController {
  constructor(private productService: ProductsService) {}
  @Get()
  findAll(): string {
    return 'return all users';
  }
}
