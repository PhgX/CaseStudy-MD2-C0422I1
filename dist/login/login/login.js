"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginMenu = void 0;
const rl = require("readline-sync");
const user_management_1 = require("../management/user-management");
const role_1 = require("../model/role");
const user_1 = require("../model/user");
const main_employee_management_1 = require("../../employeeManagement/employee-run/main-employee-management");
var LoginChoice;
(function (LoginChoice) {
    LoginChoice[LoginChoice["EXIT"] = 0] = "EXIT";
    LoginChoice[LoginChoice["LOGIN"] = 1] = "LOGIN";
    LoginChoice[LoginChoice["REGISTER"] = 2] = "REGISTER";
})(LoginChoice || (LoginChoice = {}));
var LoginCurrentAccount;
(function (LoginCurrentAccount) {
    LoginCurrentAccount[LoginCurrentAccount["USERNAME"] = 0] = "USERNAME";
    LoginCurrentAccount[LoginCurrentAccount["PASSWORD"] = 1] = "PASSWORD";
})(LoginCurrentAccount || (LoginCurrentAccount = {}));
class LoginMenu {
    constructor() {
        this.userManagement = new user_management_1.UserManagement();
    }
    inputUser() {
        let username = this.inputUsername();
        let regexForPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/g;
        let password = this.inputPassword(regexForPassword);
        this.inputConfirmPassword(password);
        let name = rl.question("Nhập họ tên: ");
        let email = this.inputEmail();
        return new user_1.User(username, password, email, name);
    }
    inputEmail() {
        let email = '';
        let isValidEmail = true;
        do {
            isValidEmail = true;
            email = rl.question("Nhập email (abc@gmail.com)");
            let regexForEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
            if (!regexForEmail.test(email)) {
                isValidEmail = false;
                console.log('Định dạng email không hợp lệ');
            }
            else {
                let currentUser = this.userManagement.findByEmail(email);
                if (currentUser) {
                    console.log('Email đã tồn tại');
                    isValidEmail = false;
                }
                else {
                    isValidEmail = true;
                }
            }
        } while (!isValidEmail);
        return email;
    }
    inputConfirmPassword(password) {
        let confirmPassword = '';
        do {
            confirmPassword = rl.question("Nhập lại mật khẩu: ");
            if (password != confirmPassword) {
                console.log('Mật khẩu nhập lại không khớp');
            }
        } while (password != confirmPassword);
    }
    inputUsername() {
        let username = '';
        let isValidUsername = true;
        do {
            username = rl.question("Nhập username: ");
            let currentUser = this.userManagement.findByUserName(username);
            if (currentUser) {
                isValidUsername = false;
                console.log('Tài khoản đã tồn tại');
            }
            else {
                isValidUsername = true;
            }
        } while (!isValidUsername);
        return username;
    }
    inputPassword(regexForPassword) {
        let password = '';
        let isValidPassword = true;
        do {
            password = rl.question('Nhập mật khẩu (Có 1 ký tự viết hoa, 1 viết thường, 1 ký tự đặc biệt, 1 số ):');
            if (!regexForPassword.test(password)) {
                isValidPassword = false;
                console.log('Password nhập vào phải có ít nhất 1 ký tự thường 1 hoa 1 đặc biệt 1 số dài 8 đến 20 ký tự!');
            }
            else {
                isValidPassword = true;
            }
        } while (!isValidPassword);
        return password;
    }
    showRoleAccount() {
        let currentLoginAccount = LoginMenu.currentLoginAccount;
        let accounts = new user_management_1.UserManagement();
        let info = accounts.getAll();
        let index = -1;
        for (let accountInfo of info) {
            if (currentLoginAccount[LoginCurrentAccount.USERNAME] == accountInfo.username && currentLoginAccount[LoginCurrentAccount.PASSWORD] == accountInfo.password) {
                index = info.indexOf(accountInfo);
            }
        }
        let currentAccountInfo = info[index];
        if (currentAccountInfo.role === 1) {
            return `Admin`;
        }
        else if (currentAccountInfo.role === 0) {
            return `User`;
        }
    }
    showAccInfor() {
        let currentLoginAccount = LoginMenu.currentLoginAccount;
        let accounts = new user_management_1.UserManagement();
        let info = accounts.getAll();
        let index = -1;
        for (let accountInfo of info) {
            if (currentLoginAccount[LoginCurrentAccount.USERNAME] == accountInfo.username && currentLoginAccount[LoginCurrentAccount.PASSWORD] == accountInfo.password) {
                index = info.indexOf(accountInfo);
            }
        }
        let currentAccountInfo = info[index];
        console.log(`
        Tên tài khoản: ${currentAccountInfo.username},
        Mật khẩu: ${currentAccountInfo.password},
        Tên người dùng: ${currentAccountInfo.name},
        Email đăng ký: ${currentAccountInfo.email}
        Loại tài khoản: ${this.showRoleAccount()}`);
    }
    logout_Clear_Info() {
        LoginMenu.currentLoginAccount = [];
    }
    run() {
        let choice = -1;
        do {
            console.log('---Hệ thống quản lý nhân viên---');
            console.log('1. Đăng nhập');
            console.log('2. Đăng ký');
            console.log('0. Thoát');
            choice = +rl.question('Nhập lựa chọn của bạn:');
            switch (choice) {
                case LoginChoice.LOGIN: {
                    console.log('---Đăng nhập---');
                    let username = rl.question("Nhập tài khoản: ");
                    let password = rl.question("Nhập mật khẩu: ");
                    let currentUser = this.userManagement.login(username, password);
                    if (currentUser) {
                        LoginMenu.currentLoginAccount.push(username, password);
                        if (currentUser.role == role_1.Role.ADMIN) {
                            let adminMenu = new main_employee_management_1.MainEmployeeManagement();
                            adminMenu.adminRun();
                        }
                        else if (currentUser.role == role_1.Role.USER) {
                            let userMenu = new main_employee_management_1.MainEmployeeManagement();
                            userMenu.userRun();
                        }
                    }
                    else {
                        console.log("Tài khoản hoặc mật khẩu không đúng!");
                    }
                    break;
                }
                case LoginChoice.REGISTER: {
                    console.log('---Đăng ký tài khoản---');
                    let user = this.inputUser();
                    this.userManagement.creatNew(user);
                    console.log('Đăng ký thành công!');
                    break;
                }
                case LoginChoice.EXIT: {
                    break;
                }
                default: {
                    break;
                }
            }
        } while (choice != 0);
    }
}
exports.LoginMenu = LoginMenu;
LoginMenu.currentLoginAccount = [];
//# sourceMappingURL=login.js.map