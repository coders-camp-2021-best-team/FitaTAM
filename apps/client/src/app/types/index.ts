export interface User {
    id: string;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    passwordHash: string;
    confirmPasswordHash: string;
    birthday: string;
    weight: number;
    height: number;
}
