import { Type } from 'class-transformer';
import {
    IsDate,
    IsEmail,
    IsEnum,
    IsNumber,
    IsOptional,
    IsString,
    Length,
    Max,
    MaxDate,
    Min,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { Gender, Goal, PhysicalActivity } from '../../entities';
import { Time } from '../../enums';

export class UpdateUserDto {
    @ApiProperty({ example: 'admin123' })
    @IsString()
    @Length(8)
    current_password: string;

    @ApiPropertyOptional({ example: 'maciej.opalinski@coderscrew.pl' })
    @IsOptional()
    @IsEmail()
    email?: string;

    @ApiPropertyOptional({ example: 'admin123' })
    @IsOptional()
    @IsString()
    @Length(8)
    password?: string;

    @ApiPropertyOptional({ example: 'Maciej' })
    @IsOptional()
    @IsString()
    first_name?: string;

    @ApiPropertyOptional({ example: 'Opaliński' })
    @IsOptional()
    @IsString()
    last_name?: string;

    @ApiPropertyOptional({ example: '2005-05-17T20:00:00.000Z' })
    @IsOptional()
    @Type(() => Date)
    @IsDate()
    @MaxDate(new Date(Date.now() - 16 * Time.YEAR))
    birthdate?: Date;

    @ApiPropertyOptional({ example: 55, description: '[kg]' })
    @IsOptional()
    @IsNumber()
    @Min(15)
    @Max(500)
    weight?: number;

    @ApiPropertyOptional({ example: 186, description: '[cm]' })
    @IsOptional()
    @IsNumber()
    @Min(40)
    @Max(300)
    height?: number;

    @ApiPropertyOptional({ enum: Gender, example: Gender.MALE })
    @IsOptional()
    @IsEnum(Gender)
    gender?: Gender;

    @ApiPropertyOptional({
        enum: PhysicalActivity,
        example: PhysicalActivity.MODERATELY_ACTIVE,
    })
    @IsOptional()
    @IsEnum(PhysicalActivity)
    physical_activity?: PhysicalActivity;

    @ApiPropertyOptional({ enum: Goal, example: Goal.GAIN_WEIGHT })
    @IsOptional()
    @IsEnum(Goal)
    goal?: Goal;
}
