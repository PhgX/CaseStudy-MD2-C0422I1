"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullTimeEmployee = void 0;
const employee_1 = require("../model/employee");
class FullTimeEmployee extends employee_1.Employee {
    constructor(salary, name, address, phone, email, actualnumberofworkingdays, position) {
        super(name, address, phone, email, position);
        this._actualnumberofworkingdays = 26;
        this._salary = salary;
        this._actualnumberofworkingdays = actualnumberofworkingdays;
    }
    get salary() {
        return this._salary;
    }
    set salary(salary) {
        this._salary = salary;
    }
    get actualnumberofworkingdays() {
        return this._actualnumberofworkingdays;
    }
    set actualnumberofworkingdays(value) {
        this._actualnumberofworkingdays = value;
    }
}
exports.FullTimeEmployee = FullTimeEmployee;
//# sourceMappingURL=fulltime-employee.js.map