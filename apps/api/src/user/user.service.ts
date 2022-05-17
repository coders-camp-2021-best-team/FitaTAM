import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '@fitatam/common';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private users: Repository<User>) {}

    async getByID(id: string) {
        const user = this.users.findOne({ where: { id } });

        if (!user) throw new NotFoundException();

        return user;
    }

    async findOne(email: string) {
        const user = this.users.findOne({
            where: [{ email }],
        });

        if (!user) throw new NotFoundException();

        return user;
    }
}
