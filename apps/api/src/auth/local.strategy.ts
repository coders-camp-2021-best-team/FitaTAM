import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '.';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
            usernameField: 'emailOrUsername',
        });
    }

    validate(emailOrUsername: string, password: string) {
        return this.authService.validateUser(emailOrUsername, password);
    }
}
