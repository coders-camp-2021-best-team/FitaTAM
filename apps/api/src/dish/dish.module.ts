import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Dish } from '@fitatam/common';
import { CaslModule } from '../casl';
import { DishController, DishService } from '.';

@Module({
    imports: [TypeOrmModule.forFeature([Dish]), CaslModule],
    providers: [DishService],
    controllers: [DishController],
    exports: [DishService],
})
export class DishModule {}
