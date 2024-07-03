import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'sqlite',
  database: './database/db.sql',
  logging: false,
  synchronize: true,
  entities: [__dirname + '../../../**/*.entity.{js,ts}'],
  migrations: ['dist/migrations/*.js'],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
