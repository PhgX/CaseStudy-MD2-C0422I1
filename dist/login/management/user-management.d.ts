import { User } from "../model/user";
import { IUserManagement } from "./i-user-management";
export declare class UserManagement implements IUserManagement {
    private static users;
    private static id;
    constructor();
    login(username: string, password: string): User | null;
    creatNew(t: User): void;
    getAll(): User[];
    removeById(id: number): void;
    updateById(id: number, t: User): void;
    findByUserName(username: string): User | null;
    findByEmail(email: string): User | null;
    findById(id: number): number;
}
