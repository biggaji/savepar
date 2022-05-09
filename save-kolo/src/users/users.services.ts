import { Injectable } from '@nestjs/common';
import { UserType } from './models/user';

/* eslint-disable */
@Injectable()
export class UserService {
    private users:UserType[] = [];

    createUser(): UserType {
        return
    }

    fetchUser(): UserType {
        return
    }

    updateUser(): UserType {
        return
    }

    deleteUser(): boolean {
        return 
    }
}