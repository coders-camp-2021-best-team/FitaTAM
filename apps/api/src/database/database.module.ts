import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
    DishTag,
    Dish,
    MealPlanCategory,
    MealPlanEntry,
    NutritionalValues,
    Product,
    Token,
    User,
} from '@fitatam/common';

import { ConfigModule, ConfigService, NodeEnv } from '../config';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                ...configService.databaseCredentials(),
                // logging: configService.NODE_ENV === NodeEnv.DEVELOPMENT,
                synchronize: configService.NODE_ENV === NodeEnv.DEVELOPMENT,
                entities: [
                    Dish,
                    DishTag,
                    MealPlanCategory,
                    MealPlanEntry,
                    NutritionalValues,
                    Product,
                    Token,
                    User,
                ],
            }),
        }),
    ],
})
export class DatabaseModule {}
