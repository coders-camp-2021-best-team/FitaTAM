import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
    Product,
    CreateProductDto,
    UpdateProductDto,
    UpdateProductStatusDto,
    GetProductDto,
} from '@fitatam/common';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product) private products: Repository<Product>
    ) {}

    async getProducts(dto: GetProductDto) {
        return await this.products.find({
            where: [{ name: dto.name }],
            take: dto.take,
            skip: dto.skip,
        });
    }

    async createProduct(dto: CreateProductDto) {
        const newProduct = this.products.create(dto);
        return this.products.save(newProduct);
    }

    async updateProduct(id: string, dto: UpdateProductDto) {
        const product = await this.products.findOneOrFail({ where: { id } });

        product.name = dto.name || product.name;
        product.package_grams = dto.package_grams || product.package_grams;
        product.package_servings =
            dto.package_servings || product.package_servings;
        product.brand = dto.brand || product.brand;
        product.barcode = dto.barcode || product.barcode;

        return this.products.save(product);
    }

    async deleteProduct(id: string) {
        try {
            const product = await this.products.findOneOrFail({
                where: { id },
            });
            return await this.products.remove(product);
        } catch {
            throw new NotFoundException();
        }
    }

    async updateProductStatus(id: string, dto: UpdateProductStatusDto) {
        try {
            const product = await this.products.findOneOrFail({
                where: { id },
            });
            product.status = dto.status || product.status;
            return this.products.save(product);
        } catch {
            throw new NotFoundException();
        }
    }
}
