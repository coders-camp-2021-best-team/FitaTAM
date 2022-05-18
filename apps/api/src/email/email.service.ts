import { Injectable } from '@nestjs/common';
import { ISendMailOptions, MailerService } from '@nestjs-modules/mailer';

import { Token, User } from '@fitatam/common';
import { ConfigService } from '../config';

@Injectable()
export class EmailService {
    constructor(
        private config: ConfigService,
        private mailerService: MailerService
    ) {}

    private sendMail(sendMailOptions: ISendMailOptions) {
        if (this.config.get('EMAIL_ENABLE') !== 'true') return;

        return this.mailerService.sendMail(sendMailOptions);
    }

    confirmAccount(user: User, token: Token) {
        const url = `${
            this.config.CLIENT_URL
        }/activate/${token.getURIEncodedToken()}`;

        return this.sendMail({
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

        return this.sendMail({
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
