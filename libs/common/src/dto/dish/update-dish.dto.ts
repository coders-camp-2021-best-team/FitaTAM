import {
    IsEnum,
    IsInt,
    IsOptional,
    IsString,
    Length,
    Max,
    Min,
} from 'class-validator';

import { MealType, Diet, WorldCuisines } from '../../entities';

export class UpdateDishDto {
    @IsOptional()
    @IsString()
    @Length(3, 128)
    name?: string;

    @IsString()
    @IsOptional()
    @Length(5, 256)
    description?: string;

    @IsOptional()
    @IsInt()
    @Min(1)
    @Max(240)
    preparation_time?: number;

    @IsOptional()
    @IsString()
    @Length(10)
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
