import { Inject, MiddlewareConsumer, Module } from '@nestjs/common';
import * as passport from 'passport';
import * as session from 'express-session';
import * as ConnectRedis from 'connect-redis';
import { Redis } from 'ioredis';

import { Time } from '@fitatam/common';
import { ConfigModule, ConfigService, NodeEnv } from '../config';
import { REDIS, RedisModule } from '../redis';
import { DatabaseModule } from '../database';
import { AuthModule } from '../auth';
import { UserModule } from '../user';
import { ProductModule } from '../product';
import { AppController, AppService } from '.';

const RedisStore = ConnectRedis(session);

@Module({
    imports: [
        ConfigModule,
        RedisModule,
        DatabaseModule,
        AuthModule,
        UserModule,
        ProductModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    constructor(
        @Inject(REDIS) private redis_client: Redis,
        private config: ConfigService
    ) {}

    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(
                session({
                    secret: this.config.COOKIE_SECRET,
                    resave: false,
                    saveUninitialized: false,
                    cookie: {
                        maxAge: 7 * Time.DAY,
                        httpOnly: true,
                        secure: 'auto',
                        sameSite:
                            this.config.NODE_ENV === NodeEnv.DEVELOPMENT
                                ? undefined
                                : 'none',
                    },
                    store: new RedisStore({ client: this.redis_client }),
                }),
                passport.initialize(),
                passport.session()
            )
            .forRoutes('*');
    }
}
