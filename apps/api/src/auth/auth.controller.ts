import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { LoginGuard, Request } from '.';

@Controller('auth')
export class AuthController {
    @UseGuards(LoginGuard)
    @Post('login')
    login(@Req() req: Request) {
        return req.user;
    }
}
