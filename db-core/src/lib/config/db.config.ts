import { IDBConfigAttributes } from '../interfaces/db-config.interface';

console.log('Environment: ', process.env['NODE_ENV']);
console.log('dir: ', );
export const dbConfig: IDBConfigAttributes = {
  username: process.env['DB_USER'],
  password: process.env['DB_PASSWORD'],
  database: process.env['DB_NAME'],
  host: process.env['DB_HOST'],
  port: parseInt(process.env['DB_PORT'] || '5432' ),
  dialect: 'postgres',
};
