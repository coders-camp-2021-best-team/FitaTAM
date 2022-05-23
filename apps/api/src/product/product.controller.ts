import {
    CreateProductDto,
    UpdateProductDto,
    UpdateProductStatusDto,
    SearchProductDto,
    User,
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
    UseGuards,
    UnauthorizedException,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CookieGuard, ReqUser } from '../auth';
import { Action, AppAbility, PoliciesGuard, UserPermissions } from '../casl';

import { ProductService } from './product.service';

@Controller('products')
@ApiTags('products')
@UseGuards(CookieGuard, PoliciesGuard)
export class ProductController {
    constructor(private productService: ProductService) {}

    @Get()
    getProducts(
        @Query() q: SearchProductDto,
        @ReqUser() user: User,
        @UserPermissions() perms: AppAbility
    ) {
        if (!perms.can(Action.Read, user)) {
            throw new UnauthorizedException();
        }
        return this.productService.getProducts(q);
    }

    @Post()
    createProduct(
        @Body() dto: CreateProductDto,
        @ReqUser() user: User,
        @UserPermissions() perms: AppAbility
    ) {
        if (!perms.can(Action.Create, user)) {
            throw new UnauthorizedException();
        }
        return this.productService.createProduct(user, dto);
    }

    @Put(':id')
    updateProduct(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() dto: UpdateProductDto,
        @ReqUser() user: User,
        @UserPermissions() perms: AppAbility
    ) {
        if (!perms.can(Action.Update, user)) {
            throw new UnauthorizedException();
        }

        return this.productService.updateProduct(id, user, dto);
    }

    @Delete(':id')
    deleteProduct(
        @Param('id', ParseUUIDPipe) id: string,
        @ReqUser() user: User,
        @UserPermissions() perms: AppAbility
    ) {
        if (!perms.can(Action.Delete, user)) {
            throw new UnauthorizedException();
        }

        return this.productService.deleteProduct(id);
    }

    @Post(':id/review')
    updateProductStatus(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() dto: UpdateProductStatusDto,
        @ReqUser() user: User,
        @UserPermissions() perms: AppAbility
    ) {
        if (!perms.can(Action.Update, user)) {
            throw new UnauthorizedException();
        }

        return this.productService.updateProductStatus(id, user, dto);
    }
}
