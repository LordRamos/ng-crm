import { BelongsTo, Column, ForeignKey, HasMany, Model, Table} from 'sequelize-typescript';
import { Country } from './country.model';
import { AcquisitionChannel } from './acquisition-channel.model';
import { Sale } from './sale.model';
@Table({underscored: true})
export class Customer extends Model {
  @Column
  firstName!: string;

  @Column
  lastName!: string;


  @ForeignKey(() => Country)
  @Column
  countryId!: number;
  @BelongsTo(() => Country)
  country!: Country;

  @ForeignKey(() => AcquisitionChannel)
  @Column
  acquisitionChannelId!: number;
  @BelongsTo(() => AcquisitionChannel)
  acquisitionChannel!:AcquisitionChannel;
  
  @HasMany(() => Sale)  
  sales!: Sale[];

 

   
}
