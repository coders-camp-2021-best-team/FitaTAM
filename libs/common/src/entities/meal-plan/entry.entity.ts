import {
    Entity,
    ManyToOne,
    OneToOne,
    Column,
    PrimaryGeneratedColumn,
    JoinColumn
} from 'typeorm';
import { Dish } from '../dish';
import { Product } from '../product';
import { User } from '../user';

@Entity()
export class MealPlanEntry {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => User, { onDelete: 'CASCADE' })
    user: User;

    @Column('timestamptz')
    timestamp: Date;

    @OneToOne(() => Dish, { eager: true, nullable: true })
    @JoinColumn()
    dish: Dish | null;

    @OneToOne(() => Product, { eager: true, nullable: true })
    @JoinColumn()
    product: Product | null;
}
