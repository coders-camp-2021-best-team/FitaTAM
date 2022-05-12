import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

import { User } from '@fitatam/common';
import { ConfigService } from '../config';

@Injectable()
export class EmailService {
    constructor(
        private config: ConfigService,
        private mailerService: MailerService
    ) {}

    async confirmAccount(user: User, token: string) {
        const url = `${this.config.CLIENT_URL}/activate/${token}`;

        await this.mailerService.sendMail({
            to: user.email,
            subject: 'Welcome to FitaTAM',
            template: 'confirm-account',
            context: {
                username: user.first_name,
                confirm_url: url,
            },
        });
    }
    async resetPassword(user: User, token: string) {
        const url = `${this.config.CLIENT_URL}/password-reset/${token}`;

        await this.mailerService.sendMail({
            to: user.email,
            subject: 'Reset your FitaTAM account password',
            template: 'reset-password',
            context: {
                username: user.username,
                reset_url: url,
            },
        });
    }
}
