import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DishService } from '.';

@Controller('dishes')
@ApiTags('dishes')
export class DishController {
    constructor(private dishService: DishService) {}
}
