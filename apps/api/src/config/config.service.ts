import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { Env, NodeEnv } from '.';

@Injectable()
export class ConfigService {
    constructor(private configService: NestConfigService<Env>) {}

    get NODE_ENV() {
        return this.configService.get<NodeEnv>('NODE_ENV');
    }

    get PORT() {
        return this.configService.get<number>('PORT');
    }

    get CLIENT_URL() {
        return this.configService.get<string>('CLIENT_URL');
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
