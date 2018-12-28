import { Address } from './address.model';
import { Phone } from './phone.model';
import { Email } from './email.model';

export class User {
    id: string;

    userId: number;
    username: string;
    firstName: string;
    lastName: string;
    password: string;
    token: string;
    addresses: Address[];
    roles: string[];
    country: string;
    website: string;
    phones: Phone[];
    emails: Email[];

    createDt: Date;
    updateDt: Date;
    updateBy: string;
    deleteDt: Date;
}
