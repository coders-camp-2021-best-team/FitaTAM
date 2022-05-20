import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from '@fitatam/common';
import { CaslModule } from '../casl';
import { UserController, UserService } from '.';

@Module({
    imports: [TypeOrmModule.forFeature([User]), CaslModule],
    providers: [UserService],
    controllers: [UserController],
    exports: [UserService],
})
export class UserModule {}
