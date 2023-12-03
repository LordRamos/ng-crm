import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Customer } from './customer.model';
@Table({underscored: true})
export class Sale extends Model {
  @ForeignKey(() => Customer)
  @Column
  customerId!: number;
  @BelongsTo(() => Customer)
  customer!: Customer;

  @Column
  amount!: number;
}
