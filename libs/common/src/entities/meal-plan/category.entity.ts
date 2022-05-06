import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user';

@Entity()
export class MealPlanCategory {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => User, (u) => u.meal_scheme, {
        onDelete: 'CASCADE',
    })
    user: User;

    @Column()
    name: string;

    @Column('time')
    time: Date;
}
