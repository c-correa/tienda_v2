import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCartItemDto } from './dto/create-cart_item.dto';
import { UpdateCartItemDto } from './dto/update-cart_item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CartItem } from './entities/cart_item.entity';
import { User } from 'src/users/entities/user.entity';
import { Product } from 'src/products/entities/product.entity';
import { Repository } from 'typeorm';

// cart-items.service.ts
@Injectable()
export class CartItemsService {
  constructor(
    @InjectRepository(CartItem) private readonly cartRepo: Repository<CartItem>,
    @InjectRepository(User) private readonly userRepo: Repository<User>,
    @InjectRepository(Product) private readonly productRepo: Repository<Product>,
  ) {}

  async create(dto: CreateCartItemDto) {
    const user = await this.userRepo.findOne({ where: { id: dto.user_id } });
    if (!user) throw new BadRequestException('Usuario no encontrado');

    const product = await this.productRepo.findOne({ where: { id: dto.product_id } });
    if (!product) throw new BadRequestException('Producto no encontrado');

    if (dto.quantity > product.stock) throw new BadRequestException('Cantidad mayor al stock disponible');

    const cartItem = this.cartRepo.create({ ...dto, user, product });
    return await this.cartRepo.save(cartItem);
  }
}
