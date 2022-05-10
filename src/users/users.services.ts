import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { userSignUpInput } from './dto/user.input';
import { UserType } from './entities/user.entity';

/* eslint-disable */
@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserType)
        private userRepository: Repository<UserType>,
    ) {}

    async createUser(args: userSignUpInput): Promise<UserType> {
        let createUser = await this.userRepository.create(args);
        return this.userRepository.save(createUser);
    }

    async fetchUser(id: string ): Promise<UserType> {
        let user = await this.userRepository.findOneBy({ id: id});
        return user;
    }

    async fetchByUserName(username: string): Promise<UserType> {
        return await this.userRepository.findOneBy({ username: username });
    }

    async fetchAllUsers(): Promise<UserType[]> {
        let users = await this.userRepository.find();
        return users;
    }

    // async updateUserByUserName(username:string): Promise<UserType> {
    //     let updatedUser 
    //     return this.userRepository.update()
    // }

    deleteUser(): boolean {
        return 
    }
}