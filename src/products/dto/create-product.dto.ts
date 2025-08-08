// create-product.dto.ts
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  name: string;

  @IsNumber()
  stock: number;

  @IsNumber()
  price_buy: number;

  @IsNumber()
  price_sell: number;

  @IsNotEmpty()
  image_url: string;

  @IsNumber()
  category_id: number;
}
