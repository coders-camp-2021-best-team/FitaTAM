import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { TokenType } from '.';
import { User } from '../user';

@Entity('user_tokens')
export class Token {
    @PrimaryColumn()
    token: string;

    @Column('enum', { enum: TokenType })
    type: TokenType;

    // RELATIONS

    @ManyToOne(() => User, (u) => u.tokens)
    user: User;
}
