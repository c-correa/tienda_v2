// create-cart-item.dto.ts
import { IsNumber } from 'class-validator';

export class CreateCartItemDto {
  @IsNumber()
  user_id: number;

  @IsNumber()
  product_id: number;

  @IsNumber()
  quantity: number;
}
