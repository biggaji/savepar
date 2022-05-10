import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserType } from './entities/user.entity';
import { UserResolver } from './users.resolvers';
import { UserService } from './users.services';

/* eslint-disable */

@Module({
    imports: [TypeOrmModule.forFeature([UserType])],
    providers: [UserService, UserResolver],
})
export class UserModule {}