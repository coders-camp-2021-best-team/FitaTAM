import {
    ArrayMaxSize,
    ArrayMinSize,
    ArrayUnique,
    IsArray,
    IsEnum,
    IsInt,
    IsOptional,
    IsString,
    IsUUID,
    Length,
    Max,
    Min,
} from 'class-validator';

import { Product } from '../../entities';

import { MealType, Diet, WorldCuisines } from '../../entities';

export class CreateDishDto {
    @IsString()
    @Length(3, 128)
    name: string;

    @IsArray()
    @ArrayMinSize(1)
    @ArrayMaxSize(20)
    @ArrayUnique()
    @IsUUID()
    products: Product[];

    @IsString()
    @IsOptional()
    @Length(5, 65535)
    description?: string;

    @IsOptional()
    @IsInt()
    @Min(1)
    @Max(240)
    preparation_time?: number;

    @IsOptional()
    @IsString()
    @Length(10, 65535)
    recipe?: string;

    @IsOptional()
    @IsInt()
    @Min(1)
    servings?: number;

    @IsOptional()
    @IsString()
    photo_etag?: string;

    @IsOptional()
    @IsEnum(MealType)
    meal_type?: MealType;

    @IsOptional()
    @IsEnum(Diet)
    diet?: Diet;

    @IsOptional()
    @IsEnum(WorldCuisines)
    world_cuisine?: WorldCuisines;
}
