import { Entity, ManyToMany, PrimaryColumn } from 'typeorm';

import { Dish } from '.';

@Entity()
export class DishTag {
    @PrimaryColumn()
    name: string;

    @ManyToMany(() => Dish, (d) => d.tags)
    dishes: Dish[];
}
