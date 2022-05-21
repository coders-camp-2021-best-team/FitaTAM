import {
    IsEnum,
    IsInt,
    IsNumber,
    IsOptional,
    IsString,
    Length,
    Max,
    Min,
} from 'class-validator';
import { Unit } from '../../entities';

export class CreateProductDto {
    @IsString()
    @Length(2, 128)
    name: string;

    @IsInt()
    @Max(5000)
    package_grams: number;

    @IsInt()
    @Min(1)
    @Max(20)
    package_servings: number;

    @IsNumber()
    energy_value: number;

    @IsNumber()
    proteins: number;

    @IsNumber()
    fats: number;

    @IsNumber()
    carbohydrates: number;

    @IsNumber()
    water: number;

    @IsEnum(Unit)
    unit: Unit;

    @IsOptional()
    @IsString()
    brand?: string;

    @IsOptional()
    @IsString()
    barcode?: string;
}
