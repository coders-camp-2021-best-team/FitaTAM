import {
    Injectable,
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
    Product,
    CreateProductDto,
    UpdateProductDto,
    UpdateProductStatusDto,
    SearchProductDto,
    NutritionalValues,
    User,
} from '@fitatam/common';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product) private products: Repository<Product>,
        @InjectRepository(NutritionalValues)
        private nutritionalValues: Repository<NutritionalValues>
    ) {}

    async getProducts(q: SearchProductDto) {
        return await this.products.find({
            where: [{ name: q.name }],
            take: q.take,
            skip: q.skip,
        });
    }

    async createProduct(user: User, dto: CreateProductDto) {
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
            author: user,
            name: dto.name,
            package_grams: dto.package_grams,
            package_servings: dto.package_servings,
            brand: dto?.brand,
            barcode: dto?.barcode,
            nutritional_values: nutritionalValues,
        });
        return await this.products.save(newProduct);
    }

    async updateProduct(id: string, user: User, dto: UpdateProductDto) {
        const product = await this.products.findOneOrFail({
            where: { id },
            relations: ['nutritional_values'],
        });

        if (!product) throw new NotFoundException();

        if (!user.isAdmin && user.id != product.author.id)
            throw new UnauthorizedException();

        return this.products.save({ ...product, ...dto });
    }

    async deleteProduct(id: string) {
        const product = await this.products.findOneOrFail({
            where: { id },
        });

        if (!product) throw new NotFoundException();

        return await this.products.remove(product);
    }

    async updateProductStatus(
        id: string,
        user: User,
        dto: UpdateProductStatusDto
    ) {
        const product = await this.products.findOneOrFail({
            where: { id },
        });

        if (!product) throw new NotFoundException();

        if (!user.isAdmin) throw new UnauthorizedException();

        return this.products.save({ ...product, ...dto });
    }
}
