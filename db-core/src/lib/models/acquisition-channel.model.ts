import { Column, HasMany, Model, Table} from 'sequelize-typescript';
import { Customer } from './customer.model';
@Table({underscored: true})
export class AcquisitionChannel extends Model {
  @Column
  name!: string;

  @HasMany(() => Customer)
    customers!: Customer[];
   
}
