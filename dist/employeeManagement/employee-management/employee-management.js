"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeManagement = void 0;
const fulltime_employee_1 = require("./fulltime-employee");
const part_time_employee_1 = require("./part-time-employee");
const enum_1 = require("../model/enum");
class EmployeeManagement {
    getdata() {
        return EmployeeManagement.employees;
    }
    addNewEmployee(t) {
        EmployeeManagement.employees.push(t);
    }
    findEmployee(name) {
        let index = this.findEmployeeIndexByName(name);
        if (index !== undefined && typeof index === 'number') {
            let person = EmployeeManagement.employees[index];
            if (person instanceof fulltime_employee_1.FullTimeEmployee) {
                console.log(`Tên :${person.name}, 
                Địa chỉ: ${person.address}, 
                Số điện thoại: ${person.phone}, 
                Chức vụ: ${person.position}, 
                Trạng thái làm việc: ${person.status} 
                `);
            }
            if (person instanceof part_time_employee_1.PartTimeEmployee) {
                console.log(`Tên :${person.name}, 
                Địa chỉ: ${person.address}, 
                Số điện thoại: ${person.phone}, 
                Chức vụ: ${person.position}, 
                Trạng thái làm việc: ${person.status}, 
                Số giờ làm: ${person.hours}}/tháng,                
                `);
            }
        }
        else {
            console.log(`Nhân viên không tồn tại`);
        }
    }
    findEmployeeByNameandPhoneNumber(name, phone) {
        let index = this.findEmployeeIndexByNameAndPhoneNumber(name, phone);
        if (index !== undefined) {
            let result = EmployeeManagement.employees[index];
            if (result instanceof fulltime_employee_1.FullTimeEmployee) {
                console.log(`Tên :${result.name}, 
                            Địa chỉ: ${result.address}, 
                            Số điện thoại: ${result.phone}, 
                            Chức vụ: ${result.position}, 
                            Trạng thái làm việc: ${result.status} 
                            `);
            }
            if (result instanceof part_time_employee_1.PartTimeEmployee) {
                console.log(`Tên :${result.name}, 
                            Địa chỉ: ${result.address}, 
                            Số điện thoại: ${result.phone}, 
                            Chức vụ: ${result.position}, 
                            Trạng thái làm việc: ${result.status}, 
                            Số giờ làm: ${result.hours}/tháng,                
                            `);
            }
        }
        else {
            console.log(`Không tìm thấy nhân viên`);
        }
    }
    findEmployeeIndexByName(name) {
        let index = -1;
        let sameNameList = [];
        for (let person of EmployeeManagement.employees) {
            if (person.name.toLowerCase() == name) {
                index = EmployeeManagement.employees.indexOf(person);
                sameNameList.push(index);
            }
        }
        if (sameNameList.length === 0) {
            return undefined;
        }
        else if (sameNameList.length === 1) {
            return index;
        }
        else if (sameNameList.length > 1) {
            return sameNameList;
        }
    }
    findEmployeeIndexByNameAndPhoneNumber(name, phone) {
        let index = -1;
        for (let person of EmployeeManagement.employees) {
            if (person.name.toLowerCase() == name && person.phone == phone) {
                index = EmployeeManagement.employees.indexOf(person);
                return index;
            }
        }
        if (index = -1) {
            return undefined;
        }
    }
    checkEmployeeStatus(name) {
        let result = this.findEmployeeIndexByName(name);
        if (typeof result === 'number') {
            return EmployeeManagement.employees[result].status;
        }
    }
    checkEmployeeStatusByNameAndPhoneNumber(name, phone) {
        let index = -1;
        let result = this.findEmployeeIndexByName(name);
        if (Array.isArray(result)) {
            for (let value of result) {
                if (EmployeeManagement.employees[value].phone == phone) {
                    index = result.indexOf(value);
                }
            }
        }
        return EmployeeManagement.employees[index].status;
    }
    changeEmployeeStatus(name) {
        let result = this.findEmployeeIndexByName(name);
        if (typeof result == 'number') {
            let newstatus = EmployeeManagement.employees[result].status;
            if (newstatus === enum_1.WorkingStatus.WORK) {
                EmployeeManagement.employees[result].status = enum_1.WorkingStatus.NOTWORK;
                console.log(`Nhân viên ${name} hiện ${EmployeeManagement.employees[result].status}`);
                console.log(`---Trạng thái nhân viên thay đổi thành công---`);
            }
            else {
                EmployeeManagement.employees[result].status = enum_1.WorkingStatus.WORK;
                console.log(`Nhân viên ${name} hiện ${EmployeeManagement.employees[result].status}`);
                console.log(`---Trạng thái nhân viên thay đổi thành công---`);
            }
        }
        else {
            console.log("Nhân viên không tồn tại");
        }
    }
    changeEmployeeStatus_SameName(name, phone) {
        let result = this.findEmployeeIndexByName(name);
        if (Array.isArray(result)) {
            let index = this.findEmployeeIndexByNameAndPhoneNumber(name, phone);
            let newstatus = EmployeeManagement.employees[index].status;
            if (newstatus === enum_1.WorkingStatus.WORK) {
                EmployeeManagement.employees[index].status = enum_1.WorkingStatus.NOTWORK;
                console.log(`Nhân viên ${name} hiện ${EmployeeManagement.employees[index].status}`);
                console.log(`---Trạng thái nhân viên thay đổi thành công---`);
            }
            else {
                EmployeeManagement.employees[index].status = enum_1.WorkingStatus.WORK;
                console.log(`Nhân viên ${name} hiện ${EmployeeManagement.employees[index].status}`);
                console.log(`---Trạng thái nhân viên thay đổi thành công---`);
            }
        }
        else {
            console.log("Nhân viên không tồn tại");
        }
    }
    updateEmployeeInfo(name, t) {
        let index = this.findEmployeeIndexByName(name);
        if (index !== undefined && typeof index == 'number') {
            EmployeeManagement.employees[index] = t;
            return true;
        }
        return false;
    }
    updateEmployeeByNameAndPhoneNumber(name, t, phone) {
        let index = this.findEmployeeIndexByName(name);
        let newIndex;
        if (index !== undefined && Array.isArray(index)) {
            for (let i = 0; i < index.length; i++) {
                let valueInSameNameList = index[i];
                if (EmployeeManagement.employees[valueInSameNameList].phone === phone) {
                    newIndex = valueInSameNameList;
                    break;
                }
            }
            EmployeeManagement.employees[newIndex] = t;
            return true;
        }
        return false;
    }
    delete(name, phone) {
        let index = this.findEmployeeIndexByName(name);
        if (index !== undefined && typeof index === 'number') {
            console.log(index);
            EmployeeManagement.employees.splice(index, 1);
        }
        else if (index !== undefined && Array.isArray(index)) {
            let newIndex = this.findEmployeeIndexByNameAndPhoneNumber(name, phone);
            if (newIndex !== undefined) {
                console.log(newIndex);
                EmployeeManagement.employees.splice(newIndex, 1);
            }
        }
        else {
            console.log('Nhân viên không tồn tại');
        }
    }
    checkInstanceOfByIndex(index) {
        for (let i = 0; i < EmployeeManagement.employees.length; i++) {
            if (EmployeeManagement.employees[index] instanceof fulltime_employee_1.FullTimeEmployee) {
                return 1;
            }
            if (EmployeeManagement.employees[index] instanceof part_time_employee_1.PartTimeEmployee) {
                return 2;
            }
        }
    }
    checkInstanceOfByNameAndPhoneNumber(name, phone) {
        let result = this.findEmployeeIndexByNameAndPhoneNumber(name, phone);
        let employee = EmployeeManagement.employees[result];
        if (employee instanceof fulltime_employee_1.FullTimeEmployee) {
            return employee;
        }
        else if (employee instanceof part_time_employee_1.PartTimeEmployee) {
            return employee;
        }
    }
    fulltimeSalaryCaculation(t, actualnumberofworkingdays) {
        let salary;
        if (actualnumberofworkingdays) {
            salary = Math.round(t.salary / 26 * actualnumberofworkingdays);
        }
        else {
            salary = Math.round(t.salary / 26 * t.actualnumberofworkingdays);
        }
        return salary;
    }
    parttimeSalaryCaculation(t, hours) {
        let salary;
        if (hours) {
            salary = Math.round(hours * t.price);
        }
        else {
            salary = Math.round(t.hours * t.price);
        }
        return salary;
    }
    showListOfEmployeesWhoIsWorking() {
        console.log(`---Danh sách nhân viên FullTime đang làm việc---`);
        for (let person of EmployeeManagement.employees) {
            let count = 1;
            if (person.status == enum_1.WorkingStatus.WORK) {
                if (person instanceof fulltime_employee_1.FullTimeEmployee) {
                    console.log(`
                    STT: ${count}. Tên: ${person.name},
                    Địa chỉ: ${person.address}, 
                    Số điện thoại: ${person.phone}, 
                    Vị trí công việc ${person.position}`);
                }
                count++;
            }
        }
        console.log(`---Danh sách nhân viên Parttime đang làm việc---`);
        for (let person of EmployeeManagement.employees) {
            let count1 = 1;
            if (person.status == enum_1.WorkingStatus.WORK) {
                if (person instanceof part_time_employee_1.PartTimeEmployee) {
                    console.log(`
                    STT: ${count1}. Tên: ${person.name},
                    Địa chỉ: ${person.address}, 
                    Số điện thoại: ${person.phone}, 
                    Vị trí công việc hiện tại: ${person.position}`);
                }
                count1++;
            }
        }
    }
    showListOfEmployeesWhoIsNotWorking() {
        console.log(`---Danh sách nhân viên đã nghỉ việc---`);
        let count = 1;
        for (let person of EmployeeManagement.employees) {
            if (person.status == enum_1.WorkingStatus.NOTWORK) {
                console.log(`
                             ${count}. Tên: ${person.name},
                             Địa chỉ: ${person.address}, 
                             Số điện thoại: ${person.phone}, 
                             Vị trí công việc trước khi nghỉ: ${person.position}`);
            }
            count++;
        }
    }
    showAccountInfo() {
        throw new Error("Method not implemented.");
    }
}
exports.EmployeeManagement = EmployeeManagement;
EmployeeManagement.employees = [];
//# sourceMappingURL=employee-management.js.map