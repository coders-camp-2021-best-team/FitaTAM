import {
    CreateProductDto,
    UpdateProductDto,
    UpdateProductStatusDto,
    SearchProductDto,
} from '@fitatam/common';
import {
    Body,
    Controller,
    Get,
    Post,
    Put,
    Query,
    Param,
    Delete,
    ParseUUIDPipe,
} from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Get()
    getProducts(@Query() q: SearchProductDto) {
        return this.productService.getProducts(q);
    }

    @Post()
    createProduct(@Body() dto: CreateProductDto) {
        return this.productService.createProduct(dto);
    }

    //TODO make this protected - only for author and admin
    @Put(':id')
    updateProduct(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() dto: UpdateProductDto
    ) {
        return this.productService.updateProduct(id, dto);
    }

    //TODO admin only
    @Delete(':id')
    deleteProduct(@Param('id', ParseUUIDPipe) id: string) {
        return this.productService.deleteProduct(id);
    }

    //TODO admin only
    @Post(':id/review')
    updateProductStatus(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() dto: UpdateProductStatusDto
    ) {
        return this.updateProductStatus(id, dto);
    }
}
