import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Product } from '@fitatam/common';

@Injectable()
export class ProductService {
    constructor(@InjectRepository(Product) private products: Repository<Product>) {}
}