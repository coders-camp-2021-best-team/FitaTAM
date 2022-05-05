import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    PrimaryColumn,
    OneToMany,
} from 'typeorm';
import {
    AccountRole,
    AccountStatus,
    Gender,
    Goal,
    PhysicalActivity,
    Category,
    Token,
} from '..';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @PrimaryColumn()
    email: string;

    @PrimaryColumn()
    username: string;

    @Column()
    passwordHash: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column('date')
    birthdate: Date;

    @Column('float', { comment: 'user body weight in kg' })
    weight: number;

    @Column('float', { comment: 'user height in cm' })
    height: number;

    @Column('enum', { enum: Gender })
    gender: Gender;

    @Column('enum', { enum: PhysicalActivity })
    physical_activity: PhysicalActivity;

    @Column('enum', { enum: Goal })
    goal: Goal;

    @Column('int')
    carbohydrates_demand: number;

    @Column('int')
    fat_demand: number;

    @Column('int')
    protein_demand: number;

    @Column('enum', { enum: AccountRole, default: AccountRole.USER })
    account_role: AccountRole;

    @Column('enum', { enum: AccountStatus, default: AccountStatus.UNVERIFIED })
    account_status: AccountStatus;

    // RELATIONS

    @OneToMany(() => Token, (t) => t.user, { cascade: true })
    tokens: Token[];

    @OneToMany(() => Category, (c) => c.user, { cascade: true })
    categories: Category[];
}
