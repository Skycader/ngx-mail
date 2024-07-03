import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';
import { UserEntity } from '../modules/auth/entities/user.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: './database/db.sql',
  entities: [UserEntity],
  logging: false,
  // entities: ['src/entity/*.ts', './build/src/entity/*.js'], // <- Here!
  // entities: [Todo],
  migrations: [__dirname + '/migrations'],
  synchronize: true,
};
