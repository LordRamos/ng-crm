import { Column, Model, Table} from 'sequelize-typescript';
@Table({underscored: true})
export class User extends Model {
  @Column
  username!: string;

  @Column
  password!: string;

  @Column
  email!: string;

   
}
