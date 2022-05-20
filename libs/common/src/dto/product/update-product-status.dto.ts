import { IsEnum, IsOptional } from "class-validator";
import { ProductStatus } from "../../entities";

export class UpdateProductStatusDto {
    @IsOptional()
    @IsEnum(ProductStatus)
    status: ProductStatus
}