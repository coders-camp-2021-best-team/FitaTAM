import {
    CreateProductDto,
    GetProductDto,
    UpdateProductDto,
    UpdateProductStatusDto,
} from '@fitatam/common';
import {
    Body,
    Controller,
    Get,
    HttpCode,
    Post,
    Put,
    Query,
    Param,
    Delete,
} from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Get()
    @HttpCode(200)
    getProducts(@Query() query: GetProductDto) {
        return this.productService.getProducts(query);
    }

    @Post()
    @HttpCode(201)
    createProduct(@Body() dto: CreateProductDto) {
        return this.productService.createProduct(dto);
    }

    //TODO make this protected - only for author and admin
    @Put(':id')
    @HttpCode(200)
    updateProduct(@Param() params, @Body() dto: UpdateProductDto) {
        return this.productService.updateProduct(params.id, dto);
    }

    //TODO admin only
    @Delete(':id')
    @HttpCode(200)
    deleteProduct(@Param() params) {
        return this.productService.deleteProduct(params.id);
    }

    //TODO admin only
    @Post(':id/review')
    @HttpCode(200)
    updateProductStatus(@Param() params, @Body() dto: UpdateProductStatusDto) {
        return this.updateProductStatus(params.id, dto);
    }
}
