import { Request as ExpressRequest } from 'express';

import { User } from '@fitatam/common';

export interface Request extends ExpressRequest {
    user: User;
}
