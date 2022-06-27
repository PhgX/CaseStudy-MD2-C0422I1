import { User } from '../model/user';
import { IManagement } from "./i-management";
export interface IUserManagement extends IManagement<User> {
    findByUserName(username: string): User | null;
    findByEmail(email: string): User | null;
    login(username: string, password: string): User | null;
}
