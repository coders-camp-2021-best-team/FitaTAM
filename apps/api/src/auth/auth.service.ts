import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user';

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}

    async validateUser(emailOrUsername: string, password: string) {
        try {
            const user = await this.userService.findOne(emailOrUsername);

            if (user.isAbleToLogin() && user.verifyPassword(password)) {
                return user;
            } else {
                throw new UnauthorizedException();
            }
        } catch {
            throw new UnauthorizedException();
        }
    }
}
