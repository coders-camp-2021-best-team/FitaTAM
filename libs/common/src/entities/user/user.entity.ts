import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    OneToOne,
    JoinColumn,
} from 'typeorm';
import { compareSync } from 'bcryptjs';
import { MealPlanCategory, NutritionalValues, Dish, Token } from '..';
import { AccountRole, AccountStatus, Gender, Goal, PhysicalActivity } from '.';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    email: string;

    @Column({ unique: true })
    username: string;

    @Column()
    password_hash: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column('date')
    birthdate: Date;

    @Column('float', { comment: '[kg]' })
    weight: number;

    @Column('float', { comment: '[cm]' })
    height: number;

    @Column('enum', { enum: Gender })
    gender: Gender;

    @Column('enum', { enum: PhysicalActivity })
    physical_activity: PhysicalActivity;

    @Column('enum', { enum: Goal })
    goal: Goal;

    @Column('enum', { enum: AccountRole, default: AccountRole.USER })
    account_role: AccountRole;

    @Column('enum', { enum: AccountStatus, default: AccountStatus.UNVERIFIED })
    account_status: AccountStatus;

    @OneToOne(() => NutritionalValues, { eager: true, cascade: true })
    @JoinColumn()
    nutritional_demand: NutritionalValues;

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
