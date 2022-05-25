import { IsString, Length, IsInt, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class SearchDishDto {
    @IsString()
    @Length(3, 128)
    name: string;

    @Type(() => Number)
    @IsInt()
    @Min(1)
    @Max(120)
    take = 10;

    @Type(() => Number)
    @IsInt()
    skip = 0;
}
