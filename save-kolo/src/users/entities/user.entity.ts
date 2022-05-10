/* eslint-disable */ 
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export type GenderType = 'male' | 'female';

@ObjectType()
@Entity('users')
export class UserType {
    @Field()
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Field()
    @Column('varchar', { length: 255, unique: true })
    username:string;

    @Field()
    @Column('varchar', { length: 255, unique: true })
    email:string;

    @Field()
    @Column({default: false})
    isVerified:boolean

    @Field()
    @Column({
        type: 'enum', enum: ['male', 'female']
    })
    gender: GenderType

    @Field()
    @Column('timestamptz')
    @CreateDateColumn()
    createdAt: Date

    @Field()
    @Column()
    @UpdateDateColumn()
    updatedAt: Date
};