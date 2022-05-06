import { Type } from 'class-transformer';
import { IsEnum, IsNumber, IsString } from 'class-validator';

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
