import { IsInt, IsOptional, IsString, Max, Min} from "class-validator";


export class UpdateProductDto {
    @IsOptional()
    @IsString()
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
    @IsString()
    brand?: string;

    @IsOptional()
    @IsString()
    barcode?: string;
}