import { Sequelize } from 'sequelize-typescript';
import { dbConfig } from '../config/db.config';
import { modelProviders } from './model.providers';



export const dbProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize(dbConfig);
      try {
        const models=modelProviders.map(m=>m.useValue)
        sequelize.addModels(models);
        await sequelize.sync();
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
      return sequelize;
    },
  },
];
