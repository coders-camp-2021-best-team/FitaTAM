import { Type } from 'class-transformer';
import { IsEnum, IsNumber, IsString, MinLength } from 'class-validator';
import { randomBytes } from 'crypto';

export enum NodeEnv {
    DEVELOPMENT = 'development',
    PRODUCTION = 'production',
    TEST = 'test',
}

export class Env {
    @IsEnum(NodeEnv)
    NODE_ENV: NodeEnv;

    @Type(() => Number)
    @IsNumber()
    PORT = 3333;

    @IsString()
    CLIENT_URL: string;

    @IsString()
    CLIENT_CORS_WILDCARD_URL: string;

    @IsString()
    @MinLength(32)
    COOKIE_SECRET: string = randomBytes(64).toString('base64');

    @IsString()
    REDIS_URL: string;

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
}
