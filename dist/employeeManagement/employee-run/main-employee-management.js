"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainEmployeeManagement = void 0;
const employee_management_1 = require("../employee-management/employee-management");
const enum_1 = require("../model/enum");
const fulltime_employee_1 = require("../employee-management/fulltime-employee");
const part_time_employee_1 = require("../employee-management/part-time-employee");
const rl = require("readline-sync");
const menuEM_1 = require("../menu-E-Management/menuEM");
const login_1 = require("../../login/login/login");
const user_management_1 = require("../../login/management/user-management");
class MainEmployeeManagement {
    constructor() {
        this.employees = new employee_management_1.EmployeeManagement();
        this.allmenu = new menuEM_1.Menu();
    }
    writeData() {
        const fs = require('fs');
        let value = new employee_management_1.EmployeeManagement();
        let data = JSON.stringify(value.getdata(), null, 2);
        fs.writeFileSync("./all_employees.txt", data);
    }
    addNewFullTimeEmployee() {
        let salary;
        let actualnumberofworkingdays;
        let name, address, phone, email, position;
        do {
            name = rl.question("Nhập tên nhân viên mới!");
        } while (!name || !isNaN(parseInt(name)));
        do {
            address = rl.question("Nhập địa chỉ");
        } while (!address || !isNaN(parseInt(address)));
        do {
            phone = rl.question("Nhập số điện thoại");
        } while (!phone || isNaN(parseInt(phone)));
        do {
            email = rl.question("Nhập địa chỉ email");
        } while (!email || !isNaN(parseInt(email)));
        do {
            position = rl.question("Nhập vị trí công việc");
        } while (!position || !isNaN(parseInt(position)));
        do {
            salary = +rl.question("Nhập mức lương theo hợp đồng --- Nhập bằng số --- Lớn hơn 0");
        } while (isNaN(salary) || salary <= 0);
        do {
            actualnumberofworkingdays = +rl.question("Nhập số ngày làm việc thực tế -- Nhập bằng số -- trong khoảng 0 đến 31");
        } while (isNaN(actualnumberofworkingdays) || actualnumberofworkingdays < 0 || actualnumberofworkingdays > 31 || !actualnumberofworkingdays);
        let person = new fulltime_employee_1.FullTimeEmployee(salary, name, address, phone, email, actualnumberofworkingdays, position);
        this.employees.addNewEmployee(person);
        console.log(`---Thêm nhân viên thành công----`);
        this.writeData();
    }
    addNewPartTimeEmployee() {
        let hours;
        let priceWorkPerHour;
        let name, address, phone, email, position;
        do {
            name = rl.question("Nhập tên nhân viên mới!");
        } while (!name || !(isNaN(parseInt(name))));
        do {
            address = rl.question("Nhập địa chỉ");
        } while (!address || !isNaN(parseInt(address)));
        do {
            phone = rl.question("Nhập số điện thoại");
        } while (!phone || isNaN(parseInt(phone)));
        do {
            email = rl.question("Nhập địa chỉ email");
        } while (!email || !isNaN(parseInt(position)));
        do {
            position = rl.question("Nhập vị trí công việc");
        } while (!position || !isNaN(parseInt(position)));
        do {
            hours = +rl.question("---Nhập lại số giờ làm việc---Nhập bằng số và tổng thời gian không quá 240 tiếng");
        } while (isNaN(hours) || hours < 0 || hours > 240 || !hours);
        do {
            priceWorkPerHour = +rl.question("Nhập lại mức lương theo giờ -- Nhập bằng số");
        } while (isNaN(priceWorkPerHour) || priceWorkPerHour <= 0 || !priceWorkPerHour);
        let person = new part_time_employee_1.PartTimeEmployee(hours, name, address, phone, email, priceWorkPerHour, position);
        this.employees.addNewEmployee(person);
        console.log(`---Thêm nhân viên thành công----`);
        this.writeData();
    }
    findEmployee() {
        let name;
        do {
            name = rl.question("Nhập tên nhân viên cần tìm");
        } while (!name || !(isNaN(parseInt(name))));
        let result = this.employees.findEmployeeIndexByName(name);
        if (typeof result === 'number') {
            this.employees.findEmployee(name);
        }
        if (Array.isArray(result)) {
            let phone = rl.question("Nhập thêm số điện thoại nhân viên cần tìm");
            this.employees.findEmployeeByNameandPhoneNumber(name, phone);
        }
        else {
            console.log('Không tìm thấy nhân viên');
        }
    }
    checkEmployeeStatus() {
        let name;
        do {
            name = rl.question("Nhập tên nhân viên cần kiểm tra trạng thái");
        } while (!name || !(isNaN(parseInt(name))));
        let result = this.employees.findEmployeeIndexByName(name);
        if (typeof result == 'number') {
            let value = this.employees.checkEmployeeStatus(name);
            console.log(`Trạng thái nhân viên: ${value}`);
        }
        else if (Array.isArray(result)) {
            let phone = rl.question("Nhập thêm số điện thoại để kiểm tra (Nhân viên bị trùng tên)");
            let value = this.employees.checkEmployeeStatusByNameAndPhoneNumber(name, phone);
            console.log(`Trạng thái nhân viên: ${value}`);
        }
        else {
            console.log('Nhập sai tên hoặc nhân viên không tồn tại');
        }
    }
    updateEmployeeInfo() {
        let name;
        do {
            name = rl.question("Nhập tên nhân viên cần cập nhật thông tin");
        } while (!name || !isNaN(parseInt(name)));
        let result = this.employees.findEmployeeIndexByName(name);
        if (typeof result == 'number' && this.employees.checkInstanceOfByIndex(result) === 1) {
            let actualnumberofworkingdays;
            let salary;
            let address, phone, email, position;
            do {
                address = rl.question("Nhập địa chỉ");
            } while (!address || !isNaN(parseInt(address)));
            do {
                phone = rl.question("Nhập số điện thoại");
            } while (!phone || isNaN(parseInt(phone)));
            do {
                email = rl.question("Nhập địa chỉ email");
            } while (!email || !isNaN(parseInt(email)));
            do {
                position = rl.question("Nhập vị trí công việc");
            } while (!position || !isNaN(parseInt(position)));
            do {
                salary = +rl.question("Nhập mức lương theo hợp đồng --- Nhập bằng số --- Lớn hơn 0");
            } while (isNaN(salary) || salary <= 0 || !salary);
            do {
                actualnumberofworkingdays = +rl.question("Nhập số ngày làm việc thực tế -- Nhập bằng số -- trong khoảng 0 đến 31");
            } while (isNaN(actualnumberofworkingdays) || actualnumberofworkingdays < 0 || actualnumberofworkingdays > 31 || !actualnumberofworkingdays);
            let person = new fulltime_employee_1.FullTimeEmployee(salary, name, address, phone, email, actualnumberofworkingdays, position);
            this.employees.updateEmployeeInfo(name, person);
            console.log("Cập nhật thành công");
        }
        else if (typeof result == 'number' && this.employees.checkInstanceOfByIndex(result) === 2) {
            let hours;
            let actualnumberofworkingdays;
            let priceWorkPerHour;
            let address, phone, email, position;
            do {
                hours = +rl.question("---Nhập lại số giờ làm việc---Nhập bằng số và tổng thời gian không quá 240 tiếng");
            } while (isNaN(hours) || hours < 0 || hours > 240 || !hours);
            do {
                address = rl.question("Nhập địa chỉ");
            } while (!address || !isNaN(parseInt(address)));
            do {
                phone = rl.question("Nhập số điện thoại");
            } while (!phone || isNaN(parseInt(phone)));
            do {
                email = rl.question("Nhập địa chỉ email");
            } while (!email || !isNaN(parseInt(email)));
            do {
                position = rl.question("Nhập vị trí công việc");
            } while (!position || !isNaN(parseInt(position)));
            do {
                actualnumberofworkingdays = +rl.question("Nhập số ngày làm việc thực tế -- Nhập bằng số -- trong khoảng 0 đến 31");
            } while (isNaN(actualnumberofworkingdays) || actualnumberofworkingdays < 0 || actualnumberofworkingdays > 31 || !actualnumberofworkingdays);
            do {
                priceWorkPerHour = +rl.question("Nhập lại mức lương theo giờ -- Nhập bằng số");
            } while (isNaN(priceWorkPerHour) || priceWorkPerHour < 0 || !priceWorkPerHour);
            let person = new part_time_employee_1.PartTimeEmployee(hours, name, address, phone, email, priceWorkPerHour, position);
            this.employees.updateEmployeeInfo(name, person);
            console.log("Cập nhật thành công");
        }
        else if (Array.isArray(result)) {
            let phone;
            do {
                phone = rl.question("Nhập thêm số điện thoại của nhân viên (Bị trùng tên)");
            } while (!phone || isNaN(parseInt(phone)));
            let index = this.employees.findEmployeeIndexByNameAndPhoneNumber(name, phone);
            if (this.employees.checkInstanceOfByIndex(index) === 1) {
                let salary;
                let actualnumberofworkingdays;
                let address, phone, email, position;
                do {
                    salary = +rl.question("Nhập mức lương theo hợp đồng --- Nhập bằng số --- Lớn hơn 0");
                } while (isNaN(salary) || salary <= 0 || !salary);
                do {
                    address = rl.question("Nhập địa chỉ");
                } while (!address || !isNaN(parseInt(address)));
                do {
                    phone = rl.question("Nhập số điện thoại");
                } while (!phone || isNaN(parseInt(phone)));
                do {
                    email = rl.question("Nhập địa chỉ email");
                } while (!email || !isNaN(parseInt(email)));
                do {
                    position = rl.question("Nhập vị trí công việc");
                } while (!position || !isNaN(parseInt(position)));
                do {
                    actualnumberofworkingdays = +rl.question("Nhập số ngày làm việc thực tế -- Nhập bằng số -- trong khoảng 0 đến 31");
                } while (isNaN(actualnumberofworkingdays) || actualnumberofworkingdays < 0 || actualnumberofworkingdays > 31 || !actualnumberofworkingdays);
                let person = new fulltime_employee_1.FullTimeEmployee(salary, name, address, phone, email, actualnumberofworkingdays, position);
                this.employees.updateEmployeeByNameAndPhoneNumber(name, person, phone);
                console.log("Cập nhật thành công");
            }
            else if (this.employees.checkInstanceOfByIndex(index) === 2) {
                let hours;
                let priceWorkPerHour;
                let address, phone, email, position;
                do {
                    hours = +rl.question("---Nhập lại số giờ làm việc---Nhập bằng số và tổng thời gian không quá 240 tiếng");
                } while (isNaN(hours) || hours < 0 || hours > 240 || !hours);
                do {
                    address = rl.question("Nhập địa chỉ");
                } while (!address || !isNaN(parseInt(address)));
                do {
                    phone = rl.question("Nhập số điện thoại");
                } while (!phone || isNaN(parseInt(phone)));
                do {
                    email = rl.question("Nhập địa chỉ email");
                } while (!email || !isNaN(parseInt(email)));
                do {
                    position = rl.question("Nhập vị trí công việc");
                } while (!position);
                do {
                    priceWorkPerHour = +rl.question("Nhập lại mức lương theo giờ -- Nhập bằng số");
                } while (isNaN(priceWorkPerHour) || priceWorkPerHour < 0 || !priceWorkPerHour);
                let person = new part_time_employee_1.PartTimeEmployee(hours, name, address, phone, email, priceWorkPerHour, position);
                this.employees.updateEmployeeByNameAndPhoneNumber(name, person, phone);
                console.log("Cập nhật thành công");
            }
        }
        else {
            console.log('Nhập sai tên hoặc nhân viên không tồn tại');
        }
    }
    updateEmployeeStatus() {
        let name;
        do {
            name = rl.question("Nhập tên nhân viên cần thay đổi status");
        } while (!name || !(isNaN(parseInt(name))));
        let result = this.employees.findEmployeeIndexByName(name);
        if (typeof result == 'number') {
            this.employees.changeEmployeeStatus(name);
        }
        else if (Array.isArray(result)) {
            let phone = rl.question("Nhập số điện thoại nhân viên (có nhân viên cùng tên)");
            this.employees.changeEmployeeStatus_SameName(name, phone);
        }
        else {
            console.log('Không tìm thấy nhân viên');
        }
    }
    deleteEmployee() {
        let name;
        let phone;
        do {
            name = rl.question("Nhập tên nhân viên cần xóa");
        } while (!name || !(isNaN(parseInt(name))));
        let result = this.employees.findEmployeeIndexByName(name);
        if (result !== undefined && typeof result == 'number' && !Array.isArray(result)) {
            this.employees.delete(name);
            console.log(`Xóa thành công`);
        }
        if (result !== undefined && Array.isArray(result) && typeof result !== 'number') {
            do {
                phone = rl.question("Nhập số điện thoại (nhân viên bị trùng tên)");
            } while (!phone || isNaN(parseInt(phone)));
            this.employees.delete(name, phone);
            console.log(`Xóa thành công`);
        }
        else {
            console.log(`Nhân viên không tồn tại`);
        }
    }
    employeeSalaryCalculation() {
        let name, phone;
        do {
            name = rl.question("nhập tên nhân viên");
        } while (!name || !(isNaN(parseInt(name))));
        do {
            phone = rl.question("nhập số điện thoại nhân viên");
        } while (!phone || isNaN(parseInt(phone)));
        let salary;
        let employee = this.employees.checkInstanceOfByNameAndPhoneNumber(name, phone);
        if (employee instanceof fulltime_employee_1.FullTimeEmployee) {
            let actualnumberofworkingdays;
            do {
                actualnumberofworkingdays = +rl.question("Nhập lại số ngày làm việc thực tế (nếu cần) -- Nhập bằng số -- trong khoảng 0 đến 31");
            } while (isNaN(actualnumberofworkingdays) || actualnumberofworkingdays < 0 || actualnumberofworkingdays > 31 || !actualnumberofworkingdays);
            salary = this.employees.fulltimeSalaryCaculation(employee, actualnumberofworkingdays);
            console.log('Tên nhân viên: ' + employee.name + '(Hợp đồng toàn thời gian');
            if (!actualnumberofworkingdays) {
                console.log('Số ngày làm việc thực tế là: ' + employee.actualnumberofworkingdays);
            }
            else if (actualnumberofworkingdays) {
                console.log('Số ngày làm việc thực tế là: ' + actualnumberofworkingdays);
            }
            console.log(`Mức lương theo hợp đồng: ${employee.salary}
                        Tổng số lương thực nhận: ${salary}`);
        }
        else if (employee instanceof part_time_employee_1.PartTimeEmployee) {
            let hours;
            do {
                hours = +rl.question("---Nhập số giờ làm thực tế nếu cần---Nhập bằng số và tổng thời gian không quá 240 tiếng");
            } while (isNaN(hours) || hours < 0 || hours > 240);
            salary = this.employees.parttimeSalaryCaculation(employee, hours);
            console.log('Tên nhân viên: ' + employee.name + '(Hợp đồng bán thời gian');
            if (!hours) {
                console.log('Số giờ làm việc thực tế là: ' + employee.hours);
            }
            else if (hours) {
                console.log('Số giờ làm việc thực tế là: ' + hours);
            }
            console.log(`Mỗi giờ được trả: ${employee.price}
                        Tổng số lương thực nhận: ${salary}`);
        }
    }
    showEmployeeListByStatusMenuChoice() {
        let choice = -1;
        do {
            this.allmenu.subMenuShowEmployeeByStatus();
            choice = +rl.question('Nhập lựa chọn: ');
            switch (choice) {
                case 1: {
                    this.employees.showListOfEmployeesWhoIsWorking();
                    break;
                }
                case 2: {
                    this.employees.showListOfEmployeesWhoIsNotWorking();
                    break;
                }
                case 0: {
                    break;
                }
                default: {
                    break;
                }
            }
        } while (choice != 0);
    }
    addNewEmployeeMenuChoice() {
        let choice = -1;
        do {
            this.allmenu.subMenuAddNewEmployee();
            choice = +rl.question("Nhập lựa chọn");
            switch (choice) {
                case 1: {
                    this.addNewFullTimeEmployee();
                    break;
                }
                case 2: {
                    this.addNewPartTimeEmployee();
                    break;
                }
                case 0: {
                    break;
                }
                default: {
                    break;
                }
            }
        } while (choice != 0);
    }
    getAccountInfo() {
        let allinfo = new login_1.LoginMenu();
        allinfo.showAccInfor();
    }
    logout_clearInfo() {
        let clearinfo = new login_1.LoginMenu();
        clearinfo.logout_Clear_Info();
    }
    deleteAccount() {
        let userName;
        do {
            userName = rl.question('Nhập tên tài khoản muốn xóa');
        } while (!userName);
        let accountDelete = new user_management_1.UserManagement();
        accountDelete.deleteAccount(userName);
    }
    adminRun() {
        let choice = -1;
        do {
            this.allmenu.menu();
            choice = +rl.question("Nhập lựa chọn");
            switch (choice) {
                case enum_1.MenuSelection.ADD_NEW_EMPLOYEE: {
                    this.addNewEmployeeMenuChoice();
                    break;
                }
                case enum_1.MenuSelection.FIND_EMPLOYEE: {
                    this.findEmployee();
                    break;
                }
                case enum_1.MenuSelection.CHECK_EMPLOYEE_STATUS: {
                    this.checkEmployeeStatus();
                    break;
                }
                case enum_1.MenuSelection.UPDATE_EMPLOYEE_INFO: {
                    this.updateEmployeeInfo();
                    break;
                }
                case enum_1.MenuSelection.UPDATE_EMPLOYEE_STATUS: {
                    this.updateEmployeeStatus();
                    break;
                }
                case enum_1.MenuSelection.DELETE: {
                    this.deleteEmployee();
                    break;
                }
                case enum_1.MenuSelection.SHOW_EMPLOYEE_LIST_BY_STATUS: {
                    this.showEmployeeListByStatusMenuChoice();
                    break;
                }
                case enum_1.MenuSelection.SHOW_SALARY: {
                    this.employeeSalaryCalculation();
                    break;
                }
                case enum_1.MenuSelection.SHOW_USER_ACC_INFOR: {
                    this.getAccountInfo();
                    break;
                }
                case enum_1.MenuSelection.DELETE_ACCOUNT: {
                    this.deleteAccount();
                }
                case enum_1.MenuSelection.EXIT: {
                    this.logout_clearInfo();
                    break;
                }
            }
        } while (choice != enum_1.MenuSelection.EXIT);
    }
    userRun() {
        let choice = -1;
        do {
            this.allmenu.menuUser();
            choice = +rl.question("Nhập lựa chọn");
            switch (choice) {
                case 1: {
                    console.log(`---Hiển thị thông tin tài khoản---`);
                    this.getAccountInfo();
                    break;
                }
                case 2: {
                    console.log(`Hiển thị thông tin cá nhân`);
                    break;
                }
                case 0: {
                    this.logout_clearInfo();
                    break;
                }
            }
        } while (choice != enum_1.MenuSelection.EXIT);
    }
}
exports.MainEmployeeManagement = MainEmployeeManagement;
//# sourceMappingURL=main-employee-management.js.map