import { WorkingStatus } from "./enum";
export declare class Employee {
    private _name;
    private _address;
    private _phone;
    private _email;
    private _position;
    private _status;
    constructor(name: string, address: string, phone: string, email: string, position: string);
    get name(): string;
    set name(name: string);
    get address(): string;
    set address(address: string);
    get phone(): string;
    set phone(phone: string);
    get email(): string;
    set email(email: string);
    get position(): string;
    set position(position: string);
    get status(): WorkingStatus;
    set status(status: WorkingStatus);
}
