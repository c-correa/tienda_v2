// products.entity.ts
import { Category } from 'src/categories/entities/category.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 150 })
  name: string;

  @Column({ type: 'int' })
  stock: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price_buy: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price_sell: number;

  @Column({ type: 'varchar', nullable: true })
  image_url: string;

  @ManyToOne(() => Category, category => category.products, { onDelete: 'CASCADE' })
  category: Category;

  @CreateDateColumn()
  created_at: Date;
}
