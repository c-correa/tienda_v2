import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { CartItemsModule } from './cart_items/cart_items.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { CartItem } from './cart_items/entities/cart_item.entity';
import { Product } from './products/entities/product.entity';
import { Category } from './categories/entities/category.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456789',
      database: 'tienda',
      entities: [User, CartItem, Product, Category,],
      synchronize: true,
    }),
    AuthModule, UsersModule, CategoriesModule, ProductsModule, CartItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
