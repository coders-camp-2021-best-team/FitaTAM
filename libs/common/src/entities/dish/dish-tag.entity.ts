import { Entity, ManyToMany, PrimaryColumn } from 'typeorm';
import { Dish } from './dish.entity';

@Entity()
export class DishTag {
    @PrimaryColumn()
    name: string;

    @ManyToMany(() => Dish, (d) => d.tags)
    dishes: Dish[];
}
