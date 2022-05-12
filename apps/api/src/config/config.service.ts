import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { RedisOptions } from 'ioredis';
import { MailerOptions } from '@nestjs-modules/mailer';

import { Env, NodeEnv } from '.';

@Injectable()
export class ConfigService {
    constructor(private env: NestConfigService<Env>) {}

    get<T>(key: keyof Env) {
        return this.env.get<T>(key);
    }

    get NODE_ENV() {
        return this.env.get<NodeEnv>('NODE_ENV');
    }

    get PORT() {
        return this.env.get<number>('PORT');
    }

    get CLIENT_URL() {
        return this.env.get<string>('CLIENT_URL');
    }

    get CLIENT_CORS_WILDCARD_URL() {
        return this.env.get<string>('CLIENT_CORS_WILDCARD_URL');
    }

    get COOKIE_SECRET() {
        return this.env.get<string>('COOKIE_SECRET');
    }

    redisOptions(): RedisOptions {
        const REDIS_URL = this.env.get<string>('REDIS_URL');

        return {
            path: REDIS_URL,
            tls: REDIS_URL.startsWith('rediss://')
                ? { requestCert: true, rejectUnauthorized: false }
                : undefined,
        };
    }

    databaseCredentials(): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: this.env.get('POSTGRES_HOST'),
            port: this.env.get('POSTGRES_PORT'),
            username: this.env.get('POSTGRES_USER'),
            password: this.env.get('POSTGRES_PASSWORD'),
            database: this.env.get('POSTGRES_DATABASE'),
        };
    }

    mailerOptions(): MailerOptions {
        return {
            transport: {
                host: this.env.get('SMTP_HOST'),
                port: this.env.get('SMTP_PORT'),
                secure: this.env.get('SMTP_SECURE'),
                auth: {
                    user: this.env.get('SMTP_USERNAME'),
                    pass: this.env.get('SMTP_PASSWORD'),
                },
            },
            defaults: {
                from: this.env.get('EMAIL_FROM'),
            },
        };
    }
}
