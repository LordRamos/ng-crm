export interface IDBConfigAttributes {
  username?: string;
  password?: string;
  database?: string;
  host?: string;
  port?: number ;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dialect: any;
  urlDatabase?: string;
}

