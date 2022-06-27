import { User } from '../model/user';
export declare class LoginMenu {
    private userManagement;
    private static currentLoginAccount;
    inputUser(): User;
    inputEmail(): string;
    inputConfirmPassword(password: string): void;
    inputUsername(): string;
    inputPassword(regexForPassword: RegExp): string;
    showRoleAccount(): string;
    showAccInfor(): any;
    logout_Clear_Info(): void;
    run(): void;
}
