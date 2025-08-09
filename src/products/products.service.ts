import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Category } from 'src/categories/entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private readonly productRepo: Repository<Product>,
    @InjectRepository(Category) private readonly categoryRepo: Repository<Category>,
  ) {}

  async create(dto: CreateProductDto) {
    const category = await this.categoryRepo.findOne({ where: { id: dto.category_id } });
    if (!category) throw new BadRequestException('Categoría no encontrada');

    const product = this.productRepo.create({ ...dto, category });
    return await this.productRepo.save(product);
  }

  findAll() {
    return this.productRepo.find({ relations: ['category'] });
  }

  async findOne(id: number) {
    const product = await this.productRepo.findOne({ where: { id }, relations: ['category'] });
    if (!product) throw new NotFoundException(`Producto con id ${id} no encontrado`);
    return product;
  }

  async update(id: number, dto: UpdateProductDto) {
    const product = await this.productRepo.findOne({ where: { id } });
    if (!product) throw new NotFoundException(`Producto con id ${id} no encontrado`);

    if (dto.category_id) {
      const category = await this.categoryRepo.findOne({ where: { id: dto.category_id } });
      if (!category) throw new BadRequestException('Categoría no encontrada');
      product.category = category;
    }

    this.productRepo.merge(product, dto);
    return await this.productRepo.save(product);
  }

  async remove(id: number) {
    const product = await this.productRepo.findOne({ where: { id } });
    if (!product) throw new NotFoundException(`Producto con id ${id} no encontrado`);
    return await this.productRepo.remove(product);
  }
}
