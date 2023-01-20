import { DataSource, DataSourceOptions } from 'typeorm';

export const DataBaseConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  entities: ['dist/**/*.entity.js'],
};

export const DataBaseMigrationConfig: DataSourceOptions = {
    ...DataBaseConfig,
    migrations: ['migrations/*']
  };

const cliDataSource = new DataSource(DataBaseMigrationConfig);

export default cliDataSource;
