import {
    Controller,
    Get,
    Param,
    ParseUUIDPipe,
    UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { User } from '@fitatam/common';
import { Action, CheckPolicies, PoliciesGuard } from '../casl';
import { CookieGuard } from '../auth';
import { UserService } from '.';

@Controller('user')
@ApiTags('user')
@UseGuards(CookieGuard, PoliciesGuard)
export class UserController {
    constructor(private userService: UserService) {}

    @Get(':id')
    @CheckPolicies((a) => a.can(Action.Read, User))
    getUser(@Param('id', ParseUUIDPipe) id: string) {
        return this.userService.getByID(id);
    }
}
