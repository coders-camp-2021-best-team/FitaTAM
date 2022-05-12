import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard, Request } from '.';

@Controller('auth')
export class AuthController {
    @UseGuards(AuthGuard)
    @Post('login')
    login(@Req() req: Request) {
        return req.user;
    }
}
