import { Column, HasMany, Model, Table} from 'sequelize-typescript';
import { Customer } from './customer.model';
@Table({underscored: true})
export class Country extends Model {
  @Column
  name!: string;

  @Column
  code!: string;

  @HasMany(() => Customer)
  customers!: Customer[];
}
