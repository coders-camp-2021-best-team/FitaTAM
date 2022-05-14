import { Type } from 'class-transformer';
import {
    IsBoolean,
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
    POSTGRES_HOST: string;

    @Type(() => Number)
    @IsNumber()
    POSTGRES_PORT: number;

    @IsString()
    POSTGRES_USER: string;

    @IsString()
    POSTGRES_PASSWORD: string;

    @IsString()
    POSTGRES_DATABASE: string;

    // SMTP

    @Type(() => Boolean)
    @IsBoolean()
    EMAIL_ENABLE = false;

    @IsString()
    SMTP_HOST: string;

    @Type(() => Number)
    @IsNumber()
    SMTP_PORT: number;

    @Type(() => Boolean)
    @IsBoolean()
    SMTP_SECURE: boolean;

    @IsString()
    SMTP_USERNAME: string;

    @IsString()
    SMTP_PASSWORD: string;

    @IsString()
    EMAIL_FROM: string;
}
