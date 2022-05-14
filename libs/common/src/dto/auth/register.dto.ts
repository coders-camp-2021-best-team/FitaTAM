import { Type } from 'class-transformer';
import {
    IsDate,
    IsEmail,
    IsEnum,
    IsNotEmpty,
    IsNumber,
    IsString,
    Length,
    Max,
    MaxDate,
    Min,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { Gender, Goal, PhysicalActivity } from '../../entities';
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

    @ApiProperty({ example: 55, description: '[kg]' })
    @IsNumber()
    @Min(15)
    @Max(500)
    weight: number;

    @ApiProperty({ example: 186, description: '[cm]' })
    @IsNumber()
    @Min(40)
    @Max(300)
    height: number;

    @ApiProperty({ enum: Gender, example: Gender.MALE })
    @IsEnum(Gender)
    gender: Gender;

    @ApiProperty({
        enum: PhysicalActivity,
        example: PhysicalActivity.MODERATELY_ACTIVE,
    })
    @IsEnum(PhysicalActivity)
    physical_activity: PhysicalActivity;

    @ApiProperty({ enum: Goal, example: Goal.GAIN_WEIGHT })
    @IsEnum(Goal)
    goal: Goal;
}
