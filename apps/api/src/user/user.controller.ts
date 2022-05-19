import {
    Body,
    Controller,
    Get,
    Param,
    ParseUUIDPipe,
    Patch,
    UnauthorizedException,
    UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { UpdateUserDto } from '@fitatam/common';
import { Action, AppAbility, UserPermissions, PoliciesGuard } from '../casl';
import { CookieGuard } from '../auth';
import { UserService } from '.';

@Controller('user')
@ApiTags('user')
@UseGuards(CookieGuard, PoliciesGuard)
export class UserController {
    constructor(private userService: UserService) {}

    @Get(':id')
    async getUser(
        @Param('id', ParseUUIDPipe) id: string,
        @UserPermissions() perms: AppAbility
    ) {
        const user = await this.userService.getByID(id);

        if (!perms.can(Action.Read, user)) {
            throw new UnauthorizedException();
        }

        return user;
    }

    @Patch(':id')
    async updateUser(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() dto: UpdateUserDto,
        @UserPermissions() perms: AppAbility
    ) {
        const user = await this.userService.getByID(id);

        if (!perms.can(Action.Update, user)) {
            throw new UnauthorizedException();
        }

        return await this.userService.updateUser(user, dto);
    }
}
