import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    OneToOne,
    JoinColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { compareSync } from 'bcryptjs';
import { ApiProperty } from '@nestjs/swagger';

import { MealPlanCategory, NutritionalValues, Dish, Token } from '..';
import { AccountRole, AccountStatus, Gender, Goal, PhysicalActivity } from '.';

@Entity()
export class User {
    @ApiProperty({ example: '850d5f65-4ad0-4ac9-a371-1e3006a6253e' })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({ example: 'maciej.opalinski@coderscrew.pl' })
    @Column({ unique: true })
    email: string;

    @Exclude()
    @Column()
    password_hash: string;

    @ApiProperty({ example: 'Maciej' })
    @Column()
    first_name: string;

    @ApiProperty({ example: 'Opaliński' })
    @Column()
    last_name: string;

    @ApiProperty({ example: '2005-05-17T20:00:00.000Z' })
    @Column('date')
    birthdate: Date;

    @ApiProperty({ example: 55, description: '[kg]' })
    @Column('float', { comment: '[kg]' })
    weight: number;

    @ApiProperty({ example: 186, description: '[cm]' })
    @Column('float', { comment: '[cm]' })
    height: number;

    @ApiProperty({ enum: Gender, example: Gender.MALE })
    @Column('enum', { enum: Gender })
    gender: Gender;

    @ApiProperty({
        enum: PhysicalActivity,
        example: PhysicalActivity.MODERATELY_ACTIVE,
    })
    @Column('enum', { enum: PhysicalActivity })
    physical_activity: PhysicalActivity;

    @ApiProperty({ enum: Goal, example: Goal.GAIN_WEIGHT })
    @Column('enum', { enum: Goal })
    goal: Goal;

    @ApiProperty({ enum: AccountRole, example: AccountRole.USER })
    @Column('enum', { enum: AccountRole, default: AccountRole.USER })
    account_role: AccountRole;

    @ApiProperty({ enum: AccountStatus, example: AccountStatus.ACTIVE })
    @Column('enum', { enum: AccountStatus, default: AccountStatus.UNVERIFIED })
    account_status: AccountStatus;

    @OneToOne(() => NutritionalValues, { eager: true, cascade: true })
    @JoinColumn()
    nutritional_demand: NutritionalValues;

    @Exclude()
    @OneToMany(() => Token, (t) => t.user, { cascade: true })
    tokens: Token[];

    @OneToMany(() => MealPlanCategory, (c) => c.user, { cascade: true })
    meal_scheme: MealPlanCategory[];

    @OneToMany(() => Dish, (d) => d.author, { cascade: true })
    dishes: Dish[];

    isAdmin() {
        return this.account_role === AccountRole.ADMIN;
    }

    isAbleToLogin() {
        return this.account_status === AccountStatus.ACTIVE;
    }

    verifyPassword(password: string) {
        return compareSync(password, this.password_hash);
    }
}
