import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Dish } from '@fitatam/common';

@Injectable()
export class DishService {
    constructor(@InjectRepository(Dish) private dishes: Repository<Dish>) {}
}
