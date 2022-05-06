import {
    Column,
    Entity,
    JoinColumn,
    ManyToMany,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { NutritionalValues } from '../nutritional-values';
import { User } from '../user';
import { ProductStatus } from '.';
import { Dish } from '../dish';

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => User, (u) => u.dishes, { onDelete: 'CASCADE' })
    author: User;

    @Column()
    name: string;

    @Column({ nullable: true })
    brand: string | null;

    @Column({ nullable: true })
    barcode: string | null;

    @Column('int', { comment: '[g]' })
    package_grams: number;

    @Column('int')
    package_servings: number;

    @OneToOne(() => NutritionalValues, { eager: true, cascade: true })
    @JoinColumn()
    nutritional_values: NutritionalValues;

    @Column({ nullable: true })
    photo_etag: string | null;

    @Column('enum', { enum: ProductStatus, default: ProductStatus.PRIVATE })
    status: ProductStatus;

    @ManyToMany(() => Dish, (d) => d.ingredients)
    used_in_dishes: Dish[];
}
