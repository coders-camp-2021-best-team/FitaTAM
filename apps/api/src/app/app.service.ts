import { Injectable } from '@nestjs/common';

import { common } from '@fitatam/common';

@Injectable()
export class AppService {
    getData(): { message: string } {
        return { message: common() };
    }
}
