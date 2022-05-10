import { Field, InputType } from '@nestjs/graphql';
import { GenderType } from '../entities/user.entity';

/* eslint-disable */

@InputType()
export class userSignUpInput {
    @Field()
    username:string;

    @Field()
    email:string;

    @Field()
    gender: GenderType
};