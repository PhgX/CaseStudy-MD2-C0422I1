"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartTimeEmployee = void 0;
const employee_1 = require("../model/employee");
class PartTimeEmployee extends employee_1.Employee {
    constructor(hours, name, address, phone, email, priceWorkPerHour, position) {
        super(name, address, phone, email, position);
        this._hours = hours;
        this._priceWorkPerHour = priceWorkPerHour;
    }
    get hours() {
        return this._hours;
    }
    set hours(hour) {
        hour;
    }
    get price() {
        return this._priceWorkPerHour;
    }
    set price(priceWorkPerHour) {
        this._priceWorkPerHour = priceWorkPerHour;
    }
    getPartTimeSalary() {
        let parttimesalary = this.hours * this.price;
        console.log(`Tên: ${this.name} là nhân viên part time có lương tháng: ${parttimesalary}`);
    }
}
exports.PartTimeEmployee = PartTimeEmployee;
//# sourceMappingURL=part-time-employee.js.map