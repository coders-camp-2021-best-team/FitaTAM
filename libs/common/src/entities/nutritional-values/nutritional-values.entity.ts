import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { Unit } from '.';

@Entity()
export class NutritionalValues {
    @Exclude()
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('float', { comment: '[kcal]' })
    energy_value: number;

    @Column('float', { comment: '[g]' })
    proteins: number;

    @Column('float', { comment: '[g]' })
    fats: number;

    @Column('float', { comment: '[g]' })
    carbohydrates: number;

    @Column('float', { comment: '[ml]' })
    water: number;

    @Column('enum', { enum: Unit, default: Unit.PER_PACKAGE })
    unit: Unit;
}
