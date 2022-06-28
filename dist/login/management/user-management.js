"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManagement = void 0;
const role_1 = require("../model/role");
const user_1 = require("../model/user");
class UserManagement {
    constructor() {
        let admin = new user_1.User('admin', 'admin', 'admin@gmail.com', 'phuongbm');
        admin.id = UserManagement.id;
        admin.role = role_1.Role.ADMIN;
        UserManagement.users.push(admin);
    }
    login(username, password) {
        for (let user of UserManagement.users) {
            if (username == user.username && password == user.password) {
                return user;
            }
        }
        return null;
    }
    creatNew(t) {
        UserManagement.id++;
        t.id = UserManagement.id;
        t.role = role_1.Role.USER;
        UserManagement.users.push(t);
    }
    getAll() {
        return UserManagement.users;
    }
    removeById(id) {
        let index = this.findById(id);
        if (index != -1) {
            UserManagement.users.splice(index, 1);
        }
    }
    updateById(id, t) {
        let index = this.findById(id);
        if (index != -1) {
            UserManagement.users[index] = t;
        }
    }
    findByUserName(username) {
        for (let user of UserManagement.users) {
            if (user.username == username) {
                return user;
            }
        }
        return null;
    }
    findByEmail(email) {
        for (let user of UserManagement.users) {
            if (user.email == email) {
                return user;
            }
        }
        return null;
    }
    findById(id) {
        let index = -1;
        for (let user of UserManagement.users) {
            if (user.id == id) {
                index = UserManagement.users.indexOf(user);
                break;
            }
        }
        return index;
    }
    deleteAccount(userName) {
        let accounts = UserManagement.users;
        let index = -1;
        for (let account of accounts) {
            if (account.username == userName) {
                index = accounts.indexOf(account);
                break;
            }
        }
        if (index != -1) {
            UserManagement.users.splice(index, 1);
            console.log(`Xóa tài khoản thành công`);
        }
        else if (index = -1) {
            console.log(`Tài khoản không tồn tại`);
        }
    }
}
exports.UserManagement = UserManagement;
UserManagement.users = [];
UserManagement.id = 1;
//# sourceMappingURL=user-management.js.map