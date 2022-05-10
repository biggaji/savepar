import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { userSignUpInput } from './dto/user.input';
import { UserType } from './entities/user.entity';
import { UserService } from './users.services';
/*eslint-disable */
@Resolver(() => UserType )
export class UserResolver {
    constructor(private readonly userService: UserService) {};

    @Query(() => UserType, { name: 'fetchUser', nullable: true })
    getUser(@Args('userId') id: string): Promise<UserType> {
        return this.userService.fetchUser(id);
    }

    @Query(() => [UserType])
    async fetchAllUsers(): Promise<UserType[]> {
        return await this.userService.fetchAllUsers();
    }

    @Query(() => UserType)
    fetchByUserName(@Args('username') username: string): Promise<UserType> {
        return this.userService.fetchByUserName(username);
    }

    @Mutation(() => UserType, { name: 'signUp'})
    createUser(@Args('userInputs') userData: userSignUpInput) {
        return this.userService.createUser(userData);
    }
}