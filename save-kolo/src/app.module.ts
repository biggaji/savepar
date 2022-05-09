/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './users/users.module';
import {ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
 
/* eslint-disable */
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      driver: ApolloDriver,
      sortSchema: true
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
