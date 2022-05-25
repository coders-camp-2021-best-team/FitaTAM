import {
    IsEnum,
    IsInt,
    IsOptional,
    IsString,
    Length,
    Max,
    Min,
    IsArray,
    IsUUID,
    ArrayUnique,
    ArrayMaxSize,
    ArrayMinSize,
} from 'class-validator';

import { MealType, Diet, WorldCuisines, Product } from '../../entities';

export class UpdateDishDto {
    @IsOptional()
    @IsString()
    @Length(3, 128)
    name?: string;

    @IsOptional()
    @IsArray()
    @ArrayMinSize(1)
    @ArrayMaxSize(20)
    @ArrayUnique()
    @IsUUID('all', { each: true })
    products?: Product[];

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
    world_cuisines?: WorldCuisines;
}
