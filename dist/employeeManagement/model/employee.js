"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const enum_1 = require("./enum");
class Employee {
    constructor(name, address, phone, email, position) {
        this._status = enum_1.WorkingStatus.WORK;
        this._address = address;
        this._name = name;
        this._email = email;
        this._position = position;
        this._phone = phone;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get address() {
        return this._address;
    }
    set address(address) {
        this._address = address;
    }
    get phone() {
        return this._phone;
    }
    set phone(phone) {
        this._phone = phone;
    }
    get email() {
        return this._email;
    }
    set email(email) {
        this._email = email;
    }
    get position() {
        return this._position;
    }
    set position(position) {
        this._position = position;
    }
    get status() {
        return this._status;
    }
    set status(status) {
        this._status = status;
    }
}
exports.Employee = Employee;
//# sourceMappingURL=employee.js.map