// categories.entity.ts
import { Product } from 'src/products/entities/product.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';

@Entity({ name: 'categories' })
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => Product, product => product.category)
  products: Product[];
}
