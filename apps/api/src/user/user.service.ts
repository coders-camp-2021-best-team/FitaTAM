import { User } from '@fitatam/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private users: Repository<User>) {}

    async getByID(id: string) {
        return this.users.findOneOrFail({ where: { id } });
    }

    async findOne(emailOrUsername: string) {
        return this.users.findOneOrFail({
            where: [{ email: emailOrUsername }, { username: emailOrUsername }],
        });
    }
}
