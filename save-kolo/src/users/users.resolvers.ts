import { Resolver, Query } from '@nestjs/graphql';
import { UserType } from './models/user';
import { UserService } from './users.services';
/*eslint-disable */
@Resolver(() => UserType )
export class UserResolver {
    constructor(private readonly userService: UserService) {};

    @Query(() => UserType, { name: 'fetchUser', nullable: true })
    getUser(): UserType {
        return this.userService.fetchUser();
    }
}