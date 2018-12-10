export class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    token: string;
    roles: Set<string>;
}
