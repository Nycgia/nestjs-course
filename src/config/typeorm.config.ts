import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: '192.168.0.5',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'nestjs_course',
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: true,
};
