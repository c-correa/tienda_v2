import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCartItemDto } from './dto/create-cart_item.dto';
import { UpdateCartItemDto } from './dto/update-cart_item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CartItem } from './entities/cart_item.entity';
import { User } from 'src/users/entities/user.entity';
import { Product } from 'src/products/entities/product.entity';
import { Repository } from 'typeorm';

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

    if (dto.quantity > product.stock) {
      throw new BadRequestException('Cantidad mayor al stock disponible');
    }

    const cartItem = this.cartRepo.create({ ...dto, user, product });
    return await this.cartRepo.save(cartItem);
  }

  async findAll() {
    return await this.cartRepo.find({
      relations: ['user', 'product'],
    });
  }

  async findOne(id: number) {
    const cartItem = await this.cartRepo.findOne({
      where: { id },
      relations: ['user', 'product'],
    });
    if (!cartItem) throw new NotFoundException('Elemento del carrito no encontrado');
    return cartItem;
  }

  async update(id: number, dto: UpdateCartItemDto) {
    const cartItem = await this.findOne(id);

    if (dto.quantity) {
      if (dto.quantity > cartItem.product.stock) {
        throw new BadRequestException('Cantidad mayor al stock disponible');
      }
      cartItem.quantity = dto.quantity;
    }

    return await this.cartRepo.save(cartItem);
  }

  async remove(id: number) {
    const cartItem = await this.findOne(id);
    return await this.cartRepo.remove(cartItem);
  }

  async findByUser(userId: number) {
  const user = await this.userRepo.findOne({ where: { id: userId } });
  if (!user) throw new NotFoundException('Usuario no encontrado');

  return await this.cartRepo.find({
    where: { user: { id: userId } },
    relations: ['user', 'product'],
  });
}

}
