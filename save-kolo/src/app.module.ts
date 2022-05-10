// /* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './users/users.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
/* eslint-disable */
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      driver: ApolloDriver,
      sortSchema: true
    }),
    UserModule,
    TypeOrmModule.forRoot({
      database: 'kolo',
      username: 'postgres',
      password: 'postgres',
      host: 'localhost',
      port: 5433,
      type: 'postgres',
      // entities: ['dist/**/*.entity{.ts, .js}'],
      autoLoadEntities: true,
      // do not use in production
      synchronize: true,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
