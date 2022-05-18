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

    @ApiProperty({ example: 55, description: '[kg]', nullable: true })
    @Column('float', { comment: '[kg]', nullable: true })
    weight: number | null;

    @ApiProperty({ example: 186, description: '[cm]', nullable: true })
    @Column('float', { comment: '[cm]', nullable: true })
    height: number | null;

    @ApiProperty({ enum: Gender, example: Gender.MALE, nullable: true })
    @Column('enum', { enum: Gender, nullable: true })
    gender: Gender | null;

    @ApiProperty({
        enum: PhysicalActivity,
        example: PhysicalActivity.MODERATELY_ACTIVE,
        nullable: true,
    })
    @Column('enum', { enum: PhysicalActivity, nullable: true })
    physical_activity: PhysicalActivity | null;

    @ApiProperty({ enum: Goal, example: Goal.GAIN_WEIGHT, nullable: true })
    @Column('enum', { enum: Goal, nullable: true })
    goal: Goal | null;

    @ApiProperty({ enum: AccountRole, example: AccountRole.USER })
    @Column('enum', { enum: AccountRole, default: AccountRole.USER })
    account_role: AccountRole;

    @ApiProperty({ enum: AccountStatus, example: AccountStatus.ACTIVE })
    @Column('enum', { enum: AccountStatus, default: AccountStatus.UNVERIFIED })
    account_status: AccountStatus;

    @Exclude()
    @OneToOne(() => NutritionalValues, {
        eager: true,
        cascade: true,
        nullable: true,
    })
    @JoinColumn()
    nutritional_demand: NutritionalValues | null;

    @Exclude()
    @OneToMany(() => Token, (t) => t.user, { cascade: true })
    tokens: Token[];

    @Exclude()
    @OneToMany(() => MealPlanCategory, (c) => c.user, { cascade: true })
    meal_scheme: MealPlanCategory[];

    @Exclude()
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
