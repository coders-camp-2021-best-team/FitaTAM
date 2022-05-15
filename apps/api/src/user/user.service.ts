import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '@fitatam/common';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private users: Repository<User>) {}

    async getByID(id: string) {
        return this.users.findOneOrFail({ where: { id } });
    }

    async findOne(email: string) {
        return this.users.findOneOrFail({
            where: [{ email }],
        });
    }
}
