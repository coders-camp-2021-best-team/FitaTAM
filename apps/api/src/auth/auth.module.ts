import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user';
import { AuthController, AuthService, LocalStrategy, LocalSerializer } from '.';

@Module({
    imports: [UserModule, PassportModule],
    providers: [AuthService, LocalStrategy, LocalSerializer],
    controllers: [AuthController],
})
export class AuthModule {}
