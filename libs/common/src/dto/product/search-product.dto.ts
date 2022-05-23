import { Type } from 'class-transformer';
import { IsInt, IsString, Length, Max, Min } from 'class-validator';

export class SearchProductDto {
    @IsString()
    @Length(3, 64)
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
