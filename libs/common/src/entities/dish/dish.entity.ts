import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../user';
import { Product } from '../product';
import { DishStatus, DishTag, MealType, Diet, WorldCuisines } from '.';

@Entity()
export class Dish {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => User, (u) => u.dishes, { onDelete: 'CASCADE' })
    author: User;

    @Column()
    name: string;

    @Column('text', { nullable: true })
    description: string | null;

    @Column('int', { comment: '[min]', nullable: true })
    preparation_time: number | null;

    @Column('text', { nullable: true })
    recipe: string | null;

    @Column('int', { nullable: true })
    servings: number | null;

    @Column({ nullable: true })
    photo_etag: string | null;

    @ManyToMany(() => Product, (p) => p.used_in_dishes, { eager: true })
    @JoinTable({ name: 'dish_ingredient' })
    ingredients: Product[];

    @Column('enum', { enum: DishStatus, default: DishStatus.PRIVATE })
    status: DishStatus;

    // TAGS

    @Column('enum', { enum: MealType, nullable: true })
    meal_type: MealType | null;

    @Column('enum', { enum: Diet, nullable: true })
    diet: Diet | null;

    @Column('enum', { enum: WorldCuisines, nullable: true })
    world_cuisines: WorldCuisines | null;

    @ManyToMany(() => DishTag, (t) => t.dishes)
    @JoinTable()
    tags: DishTag[];
}
