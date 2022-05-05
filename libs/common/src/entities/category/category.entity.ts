import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../user';

@Entity('user_categories')
export class Category {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column('time')
    time: Date;

    // RELATIONS

    @ManyToOne(() => User, (u) => u.categories)
    user: User;
}
