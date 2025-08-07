import { Module } from '@nestjs/common';
import { CartItemsService } from './cart_items.service';
import { CartItemsController } from './cart_items.controller';
import { CartItem } from './entities/cart_item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Product } from 'src/products/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CartItem, User, Product])],
  controllers: [CartItemsController],
  providers: [CartItemsService],
})
export class CartItemsModule {}
