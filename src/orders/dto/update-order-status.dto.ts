import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';
import { IsString } from 'class-validator';

export class UpdateOrderStatusDto extends PartialType(CreateOrderDto) {
  @IsString()
  id: number;
}
