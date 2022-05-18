import { Type } from 'class-transformer';
import {
    IsDate,
    IsEmail,
    IsNotEmpty,
    IsString,
    Length,
    MaxDate,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { Match } from '../../decorators';

export class RegisterDto {
    @ApiProperty({ example: 'maciej.opalinski@coderscrew.pl' })
    @IsEmail()
    email: string;

    @ApiProperty({ example: 'admin123' })
    @IsString()
    @Length(8)
    password: string;

    @ApiProperty({ example: 'admin123' })
    @IsString()
    @Match(RegisterDto, (s) => s.password)
    confirm_password: string;

    @ApiProperty({ example: 'Maciej' })
    @IsString()
    @IsNotEmpty()
    first_name: string;

    @ApiProperty({ example: 'Opaliński' })
    @IsString()
    @IsNotEmpty()
    last_name: string;

    @ApiProperty({ example: '2005-05-17T20:00:00.000Z' })
    @Type(() => Date)
    @IsDate()
    @MaxDate(new Date(Date.now() - 16 * 365 * 24 * 60 * 60 * 1000))
    birthdate: Date;
}
