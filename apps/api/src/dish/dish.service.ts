import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

import {
    Dish,
    SearchDishDto,
    CreateDishDto,
    User,
    Product,
    UpdateDishDto,
} from '@fitatam/common';

@Injectable()
export class DishService {
    constructor(
        @InjectRepository(Dish) private dishes: Repository<Dish>,
        @InjectRepository(Product) private products: Repository<Product>
    ) {}

    async getDishes(q: SearchDishDto) {
        return await this.dishes.find({
            where: [{ name: q.name }],
            take: q.take,
            skip: q.skip,
        });
    }

    async createDish(user: User, dto: CreateDishDto) {
        const products = await this.products.findBy({
            id: In(dto.productIDs),
        });

        if (!products) throw new NotFoundException();

        const newDish = this.dishes.create({
            author: user,
            name: dto.name,
            description: dto.description,
            preparation_time: dto.preparation_time,
            recipe: dto.recipe,
            servings: dto.servings,
            photo_etag: dto.photo_etag,
            diet: dto.diet,
            world_cuisines: dto.world_cuisine,
            ingredients: products,
        });
        return await this.dishes.save(newDish);
    }

    async getDish(id: string) {
        const dish = await this.dishes.findOneOrFail({
            where: { id },
        });

        if (!dish) throw new NotFoundException();

        return dish;
    }

    async deleteDish(id: string) {
        const dish = await this.dishes.findOneOrFail({
            where: { id },
        });

        if (!dish) throw new NotFoundException();

        return await this.dishes.remove(dish);
    }

    async updateDish(id: string, dto: UpdateDishDto) {
        const dish = await this.dishes.findOneOrFail({
            where: { id },
            relations: ['dish_ingredient'],
        });

        if (!dish) throw new NotFoundException();

        return await this.dishes.save({
            ...dish,
            ...dto,
        });
    }
}
