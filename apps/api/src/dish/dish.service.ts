import {
    Injectable,
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

import {
    Dish,
    SearchDishDto,
    AddDishDto,
    User,
    UpdateDishDto,
} from '@fitatam/common';

@Injectable()
export class DishService {
    constructor(@InjectRepository(Dish) private dishes: Repository<Dish>) {}

    async getDishes(q: SearchDishDto) {
        return await this.dishes.find({
            where: [{ name: q.name }],
            take: q.take,
            skip: q.skip,
        });
    }

    async addDish(user: User, dto: AddDishDto) {
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
            ingredients: dto.products,
        });
        return await this.dishes.save(newDish);
    }

    async getDish(user: User, id: string) {
        const dish = await this.dishes.findOneOrFail({
            where: { id },
            relations: ['user'],
        });

        if (!dish) throw new NotFoundException();

        if (dish.author.id != user.id) throw new UnauthorizedException();

        return dish;
    }

    async removeDish(user: User, id: string) {
        const dish = await this.dishes.findOneOrFail({
            where: { id },
            relations: ['user'],
        });

        if (!dish) throw new NotFoundException();

        if (dish.author.id != user.id) throw new UnauthorizedException();

        return await this.dishes.remove(dish);
    }

    async updateDish(user: User, id: string, dto: UpdateDishDto) {
        const dish = await this.dishes.findOneOrFail({
            where: { id },
            relations: ['dish_ingredient'],
        });

        if (!dish) throw new NotFoundException();

        if (dish.author.id != user.id) throw new UnauthorizedException();

        return await this.dishes.save({
            ...dish,
            ...dto,
        });
    }
}
