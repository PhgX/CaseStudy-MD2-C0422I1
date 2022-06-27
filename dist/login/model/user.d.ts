export declare class User {
    private _id;
    private _username;
    private _password;
    private _role;
    private _email;
    private _name;
    constructor(username: string, password: string, email: string, name: string);
    get id(): number;
    set id(value: number);
    get username(): string;
    set username(value: string);
    get password(): string;
    set password(value: string);
    get role(): number;
    set role(value: number);
    get email(): string;
    set email(value: string);
    get name(): string;
    set name(value: string);
}
