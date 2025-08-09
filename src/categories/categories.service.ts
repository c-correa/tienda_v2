import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category) private readonly categoryRepo: Repository<Category>,
  ) {}

  create(dto: CreateCategoryDto) {
    const category = this.categoryRepo.create(dto);
    return this.categoryRepo.save(category);
  }

  findAll() {
    return this.categoryRepo.find();
  }

  async update(id: number, dto: UpdateCategoryDto) {
    const category = await this.categoryRepo.findOne({ where: { id } });
    if (!category) {
      throw new NotFoundException(`Categoría con id ${id} no encontrada`);
    }
    this.categoryRepo.merge(category, dto);
    return this.categoryRepo.save(category);
  }

  async remove(id: number) {
    const category = await this.categoryRepo.findOne({ where: { id } });
    if (!category) {
      throw new NotFoundException(`Categoría con id ${id} no encontrada`);
    }
    return this.categoryRepo.remove(category);
  }
}
