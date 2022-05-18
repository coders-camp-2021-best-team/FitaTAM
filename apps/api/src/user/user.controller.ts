import {
    Controller,
    Get,
    Param,
    ParseUUIDPipe,
    UnauthorizedException,
    UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { User } from '@fitatam/common';
import { Action, CaslAbilityFactory, PoliciesGuard } from '../casl';
import { CookieGuard, ReqUser } from '../auth';
import { UserService } from '.';

@Controller('user')
@ApiTags('user')
@UseGuards(CookieGuard, PoliciesGuard)
export class UserController {
    constructor(
        private userService: UserService,
        private caslAbilityFactory: CaslAbilityFactory
    ) {}

    @Get(':id')
    async getUser(
        @Param('id', ParseUUIDPipe) id: string,
        @ReqUser() requser: User
    ) {
        const user = await this.userService.getByID(id);

        if (
            this.caslAbilityFactory
                .createForUser(requser)
                .can(Action.Read, user)
        ) {
            return user;
        } else throw new UnauthorizedException();
    }
}
