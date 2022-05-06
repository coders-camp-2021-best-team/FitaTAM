import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { TokenType } from '.';
import { User } from '../user';

@Entity('user_token')
export class Token {
    @PrimaryColumn()
    token: string;

    @Column('enum', { enum: TokenType })
    type: TokenType;

    @ManyToOne(() => User, (u) => u.tokens, { onDelete: 'CASCADE' })
    user: User;
}
