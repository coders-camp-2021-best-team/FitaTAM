import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { Request } from '../../auth';
import { CaslAbilityFactory } from '..';

export const UserPermissions = createParamDecorator(
    (_, ctx: ExecutionContext) => {
        const { user } = ctx.switchToHttp().getRequest<Request>();

        return CaslAbilityFactory.createForUser(user);
    }
);
