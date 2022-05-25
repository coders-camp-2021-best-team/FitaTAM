import {
    Controller,
    Get,
    UseGuards,
    Query,
    UnauthorizedException,
    Post,
    Body,
    Param,
    Delete,
    Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DishService } from '.';
import { CookieGuard, ReqUser } from '../auth';
import { Action, AppAbility, PoliciesGuard, UserPermissions } from '../casl';
import {
    CreateDishDto,
    SearchDishDto,
    UpdateDishDto,
    User,
} from '@fitatam/common';

@Controller('dishes')
@ApiTags('dishes')
@UseGuards(CookieGuard, PoliciesGuard)
export class DishController {
    constructor(private dishService: DishService) {}

    @Get()
    getDishes(
        @Query() q: SearchDishDto,
        @ReqUser() user: User,
        @UserPermissions() perms: AppAbility
    ) {
        if (!perms.can(Action.Read, user)) {
            throw new UnauthorizedException();
        }
        return this.dishService.getDishes(q);
    }

    @Post()
    addDish(
        @Body() dto: CreateDishDto,
        @ReqUser() user: User,
        @UserPermissions() perms: AppAbility
    ) {
        if (!perms.can(Action.Create, user)) {
            throw new UnauthorizedException();
        }
        return this.dishService.addDish(user, dto);
    }

    @Get(':id')
    getDish(
        @Param('id') id: string,
        @ReqUser() user: User,
        @UserPermissions() perms: AppAbility
    ) {
        if (!perms.can(Action.Read, user)) {
            throw new UnauthorizedException();
        }
        return this.dishService.getDish(user, id);
    }

    @Delete(':id')
    removeDish(
        @Param('id') id: string,
        @ReqUser() user: User,
        @UserPermissions() perms: AppAbility
    ) {
        if (!perms.can(Action.Delete, user)) {
            throw new UnauthorizedException();
        }
        return this.dishService.removeDish(user, id);
    }

    @Put(':id')
    updateDish(
        @Param('id') id: string,
        @Body() dto: UpdateDishDto,
        @ReqUser() user: User,
        @UserPermissions() perms: AppAbility
    ) {
        if (!perms.can(Action.Update, user)) {
            throw new UnauthorizedException();
        }
        return this.dishService.updateDish(user, id, dto);
    }
}
