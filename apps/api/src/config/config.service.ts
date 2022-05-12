import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { RedisOptions } from 'ioredis';

import { Env, NodeEnv } from '.';

@Injectable()
export class ConfigService {
    constructor(private configService: NestConfigService<Env>) {}

    get<T>(key: keyof Env) {
        return this.configService.get<T>(key);
    }

    get NODE_ENV() {
        return this.configService.get<NodeEnv>('NODE_ENV');
    }

    get PORT() {
        return this.configService.get<number>('PORT');
    }

    get CLIENT_URL() {
        return this.configService.get<string>('CLIENT_URL');
    }

    get CLIENT_CORS_WILDCARD_URL() {
        return this.configService.get<string>('CLIENT_CORS_WILDCARD_URL');
    }

    get COOKIE_SECRET() {
        return this.configService.get<string>('COOKIE_SECRET');
    }

    get REDIS_URL() {
        return this.configService.get<string>('REDIS_URL');
    }

    redisOptions(): RedisOptions {
        return {
            tls: this.REDIS_URL.startsWith('rediss://')
                ? { requestCert: true, rejectUnauthorized: false }
                : undefined,
        };
    }

    databaseCredentials(): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: this.configService.get('POSTGRES_HOST'),
            port: this.configService.get('POSTGRES_PORT'),
            username: this.configService.get('POSTGRES_USER'),
            password: this.configService.get('POSTGRES_PASSWORD'),
            database: this.configService.get('POSTGRES_DATABASE'),
        };
    }
}
