import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
    Product,
    CreateProductDto,
    UpdateProductDto,
    UpdateProductStatusDto,
    NutritionalValues,
} from '@fitatam/common';
@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product) private products: Repository<Product>,
        @InjectRepository(NutritionalValues)
        private nutritionalValues: Repository<NutritionalValues>
    ) {}

    async getProducts(name: string, take = 10, skip = 0) {
        return await this.products.find({
            where: [{ name }],
            take,
            skip,
        });
    }

    async createProduct(dto: CreateProductDto) {
        const nutritionalValues = this.nutritionalValues.create({
            energy_value: dto.energy_value,
            proteins: dto.proteins,
            fats: dto.fats,
            carbohydrates: dto.carbohydrates,
            water: dto.water,
            unit: dto.unit,
        });

        await this.nutritionalValues.save(nutritionalValues);

        const newProduct = this.products.create({
            name: dto.name,
            package_grams: dto.package_grams,
            package_servings: dto.package_servings,
            brand: dto?.brand,
            barcode: dto?.barcode,
            nutritional_values: nutritionalValues,
        });
        return await this.products.save(newProduct);
    }

    async updateProduct(id: string, dto: UpdateProductDto) {
        try {
            const product = await this.products.findOneOrFail({
                where: { id },
            });

            product.name = dto.name || product.name;
            product.package_grams = dto.package_grams || product.package_grams;
            product.package_servings =
                dto.package_servings || product.package_servings;
            product.brand = dto.brand || product.brand;
            product.barcode = dto.barcode || product.barcode;
            product.nutritional_values.carbohydrates =
                dto.carbohydrates || product.nutritional_values.carbohydrates;
            product.nutritional_values.energy_value =
                dto.energy_value || product.nutritional_values.energy_value;
            product.nutritional_values.proteins =
                dto.proteins || product.nutritional_values.proteins;
            product.nutritional_values.fats =
                dto.fats || product.nutritional_values.fats;
            product.nutritional_values.water =
                dto.water || product.nutritional_values.water;
            product.nutritional_values.unit =
                dto.unit || product.nutritional_values.unit;

            return this.products.save(product);
        } catch {
            throw new NotFoundException();
        }
    }

    async deleteProduct(id: string) {
        try {
            const product = await this.products.findOneOrFail({
                where: { id },
                relations: ['nutritional_values'],
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
