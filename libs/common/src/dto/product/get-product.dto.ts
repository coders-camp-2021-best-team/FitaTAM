import { Type } from 'class-transformer';
import { IsInt, IsString, Length, Max, Min } from 'class-validator';

export class GetProductDto {
    @Length(2, 128)
    @IsString()
    name: string;

    @Type(() => Number)
    @IsInt()
    @Min(1)
    @Max(20)
    take = 20;

    @Type(() => Number)
    @IsInt()
    skip = 0;
}
