import { IsOptional, IsString } from "class-validator";

export class GetProductDto {
    @IsOptional()
    @IsString()
    name?: string;
}