import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

import { Token, User } from '@fitatam/common';
import { ConfigService } from '../config';

@Injectable()
export class EmailService {
    constructor(
        private config: ConfigService,
        private mailerService: MailerService
    ) {}

    confirmAccount(user: User, token: Token) {
        const url = `${
            this.config.CLIENT_URL
        }/activate/${token.getURIEncodedToken()}`;

        console.log(url);

        return this.mailerService.sendMail({
            to: user.email,
            subject: 'Welcome to FitaTAM',
            template: 'confirm-account',
            context: {
                username: user.first_name,
                confirm_url: url,
            },
        });
    }

    resetPassword(user: User, token: Token) {
        const url = `${
            this.config.CLIENT_URL
        }/password-reset/${token.getURIEncodedToken()}`;

        return this.mailerService.sendMail({
            to: user.email,
            subject: 'Reset your FitaTAM account password',
            template: 'reset-password',
            context: {
                name: user.first_name,
                reset_url: url,
            },
        });
    }
}
