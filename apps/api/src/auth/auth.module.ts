import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Token, User } from '@fitatam/common';
import { UserModule } from '../user';
import { EmailModule } from '../email';
import { AuthController, AuthService, LocalStrategy, LocalSerializer } from '.';

@Module({
    imports: [
        UserModule,
        PassportModule,
        TypeOrmModule.forFeature([User, Token]),
        EmailModule,
    ],
    providers: [AuthService, LocalStrategy, LocalSerializer],
    controllers: [AuthController],
})
export class AuthModule {}
