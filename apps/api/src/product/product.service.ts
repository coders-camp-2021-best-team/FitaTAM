import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
    CreateProductDto,
    UpdateProductDto,
    GetProductDto,
    UpdateProductStatusDto,
} from '../../../../libs/common/src/dto/product';

import { Product } from '@fitatam/common';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product) private products: Repository<Product>
    ) {}

    async getProducts(data: GetProductDto, take: number, skip: number) {
        return await this.products.find({
            where: [{ name: data.name }],
            take,
            skip,
        });
    }

    async createProduct(data: CreateProductDto) {
        const newProduct = this.products.create({
            name: data.name,
            package_grams: data.package_grams,
            package_servings: data.package_servings,
            brand: data?.brand,
            barcode: data?.barcode,
        });
        return this.products.save(newProduct);
    }

    async updateProduct(id: string, data: UpdateProductDto) {
        const product = await this.products.findOneOrFail({ where: { id } });

        product.name = data.name || product.name;
        product.package_grams = data.package_grams || product.package_grams;
        product.package_servings =
            data.package_servings || product.package_servings;
        product.brand = data.brand || product.brand;
        product.barcode = data.barcode || product.barcode;

        return this.products.save(product);
    }

    async deleteProduct(id: string) {
        const product = await this.products.findOneOrFail({
            where: { id },
        });

        return await this.products.remove(product);
    }

    async updateProductStatus(id: string, data: UpdateProductStatusDto) {
        const product = await this.products.findOneOrFail({ where: { id } });
        product.status = data.status || product.status;

        return this.products.save(product);
    }
}
