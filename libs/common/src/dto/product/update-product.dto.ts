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

export class UpdateProductDto {
    @IsOptional()
    @IsString()
    @Length(2, 128)
    name?: string;

    @IsOptional()
    @IsInt()
    @Max(5000)
    package_grams?: number;

    @IsOptional()
    @IsInt()
    @Min(1)
    @Max(20)
    package_servings?: number;

    @IsOptional()
    @IsNumber()
    energy_value?: number;

    @IsOptional()
    @IsNumber()
    proteins?: number;

    @IsOptional()
    @IsNumber()
    fats?: number;

    @IsOptional()
    @IsNumber()
    carbohydrates?: number;

    @IsOptional()
    @IsNumber()
    water?: number;

    @IsOptional()
    @IsEnum(Unit)
    unit?: Unit;

    @IsOptional()
    @IsString()
    brand?: string;

    @IsOptional()
    @IsString()
    barcode?: string;
}
