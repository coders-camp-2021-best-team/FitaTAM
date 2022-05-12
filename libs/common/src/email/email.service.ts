import { Injectable } from '@nestjs/common';
import { User } from '../entities';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {
    constructor(private mailerService: MailerService) {}

    async registrationEmail(user: User, clientURL: string, activateID: string) {
        const url = `${clientURL}/activate/${activateID}`;

        await this.mailerService.sendMail({
            to: user.email,
            subject: 'Welcome to Fitatam App! Confirm your Email',
            template: './registrationEmail',
            context: {
                username: user.first_name,
                confirm_url: url,
            },
        });
    }
    async resetPasswordEmail(user: User, clientURL: string, resetID: string) {
        const url = `${clientURL}/password-reset/${resetID}`;

        await this.mailerService.sendMail({
            to: user.email,
            subject: 'Reset your Fitatam account password',
            template: './resetPasswordEmail',
            context: {
                username: user.first_name,
                reset_url: url,
            },
        });
    }
}
