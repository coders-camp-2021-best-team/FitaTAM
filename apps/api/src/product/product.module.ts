import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Product } from '@fitatam/common';
import { CaslModule } from '../casl';
import { ProductController, ProductService } from '.';

@Module({
    imports: [TypeOrmModule.forFeature([Product]), CaslModule],
    providers: [ProductService],
    controllers: [ProductController],
    exports: [ProductService],
})
export class ProductModule {}
