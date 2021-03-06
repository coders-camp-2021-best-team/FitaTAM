import { Type } from 'class-transformer';
import {
    IsBooleanString,
    IsEnum,
    IsNumber,
    IsString,
    MinLength,
} from 'class-validator';
import { randomBytes } from 'crypto';

export enum NodeEnv {
    DEVELOPMENT = 'development',
    PRODUCTION = 'production',
    TEST = 'test',
}

export class Env {
    @IsEnum(NodeEnv)
    NODE_ENV: NodeEnv;

    // APP

    @Type(() => Number)
    @IsNumber()
    PORT = 3333;

    @IsString()
    BASE_PATH = '/';

    // CORS

    @IsString()
    CLIENT_URL: string;

    @IsString()
    CLIENT_CORS_WILDCARD_URL: string;

    // SESSION

    @IsString()
    @MinLength(32)
    COOKIE_SECRET: string = randomBytes(64).toString('base64url');

    // REDIS

    @IsString()
    REDIS_URL: string;

    // POSTGRESQL
    @IsString()
    DATABASE_URL: string;

    @IsBooleanString()
    DATABASE_SSL: string;

    // SMTP

    @IsBooleanString()
    EMAIL_ENABLE: string;

    @IsString()
    SMTP_HOST: string;

    @Type(() => Number)
    @IsNumber()
    SMTP_PORT: number;

    @IsBooleanString()
    SMTP_SECURE: string;

    @IsString()
    SMTP_USERNAME: string;

    @IsString()
    SMTP_PASSWORD: string;

    @IsString()
    EMAIL_FROM: string;
}
