"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_management_1 = require("./employee-management/employee-management");
const enum_1 = require("./model/enum");
const fulltime_employee_1 = require("./employee-management/fulltime-employee");
const part_time_employee_1 = require("./employee-management/part-time-employee");
const rl = require("readline-sync");
let employees = new employee_management_1.EmployeeManagement();
let choice = -1;
function menu() {
    console.log('---Menu chính---');
    console.log('1. Thêm nhân viên mới');
    console.log('2. Tìm kiếm nhân viên');
    console.log('3. Kiểm tra trạng thái nhân viên');
    console.log('4. Sửa thông tin nhân viên');
    console.log('5. Thay đổi trạng thái nhân viên');
    console.log('6. Xóa nhân viên khỏi hệ thống');
    console.log('7. Hiển thị danh sách nhân viên');
    console.log('8. Tính lương nhân viên');
    console.log('0. Thoát');
}
function subMenuAddNewEmployee() {
    console.log(`---Thêm nhân viên mới---`);
    console.log(`1. Thêm nhân viên làm toàn thời gian`);
    console.log(`2. Thêm nhân viên làm theo giờ`);
    console.log(`0. Trở lại menu chính`);
}
function subMenuShowEmployeeByStatus() {
    console.log(`---Hiển thị danh sách nhân viên theo trạng thái`);
    console.log(`1. Danh sách nhân viên đang làm việc`);
    console.log(`2. Danh sách nhân viên đã nghỉ việc`);
    console.log(`0. Quay trở lại`);
}
function addNewEmployeeFullTime() {
    let name = rl.question("Nhập tên nhân viên");
    let salary = +rl.question("Nhập mức lương");
    if (isNaN(salary)) {
        salary = +rl.question("Nhập lại mức lương-- Nhập bằng số");
    }
    let address = rl.question("Nhập địa chỉ");
    let phone = rl.question("Nhập số điện thoại");
    let email = rl.question("Nhập địa chỉ email");
    let position = rl.question("Nhập vị trí công việc");
    let actualnumberofworkingdays = +rl.question("Nhập số ngày làm việc thực tế trong tháng");
    if (isNaN(actualnumberofworkingdays)) {
        actualnumberofworkingdays = +rl.question("Nhập lại số ngày làm việc thực tế trong tháng-- Nhập bằng số");
    }
    let person = new fulltime_employee_1.FullTimeEmployee(salary, name, address, phone, email, actualnumberofworkingdays, position);
    employees.addNewEmployee(person);
    console.log(`---Thêm nhân viên thành công----`);
}
function addNewEmployeePartTime() {
    let name = rl.question("Nhập tên nhân viên");
    let hours = +rl.question("Nhập số giờ làm việc");
    if (isNaN(hours)) {
        hours = +rl.question("Nhập lại số giờ làm việc-- Nhập bằng số");
    }
    let address = rl.question("Nhập địa chỉ");
    let phone = rl.question("Nhập số điện thoại");
    let email = rl.question("Nhập địa chỉ email");
    let position = rl.question("Nhập vị trí công việc");
    let priceWorkPerHour = +rl.question("Nhập mức lương theo giờ");
    if (isNaN(priceWorkPerHour)) {
        priceWorkPerHour = +rl.question("Nhập lại mức lương theo giờ -- Nhập bằng số");
    }
    let person = new part_time_employee_1.PartTimeEmployee(hours, name, address, phone, email, priceWorkPerHour, position);
    employees.addNewEmployee(person);
    console.log(`---Thêm nhân viên thành công----`);
}
function addNewEmployee() {
    let choice = -1;
    do {
        subMenuAddNewEmployee();
        choice = +rl.question("Nhập lựa chọn");
        switch (choice) {
            case 1: {
                addNewEmployeeFullTime();
                break;
            }
            case 2: {
                addNewEmployeePartTime();
                break;
            }
            case 0: {
                break;
            }
            default: {
                choice = +rl.question("Nhập lại lựa chọn");
            }
        }
    } while (choice != 0);
}
function findEmployee() {
    let name = rl.question("Nhập tên nhân viên cần tìm");
    let result = employees.findEmployeeIndexByName(name);
    if (typeof result === 'number') {
        employees.findEmployee(name);
    }
    if (Array.isArray(result)) {
        let phone = rl.question("Nhập thêm số điện thoại nhân viên cần tìm");
        employees.findEmployeeByNameandPhoneNumber(name, phone);
    }
}
function checkEmployeeStatus() {
    let name = rl.question("Nhập tên nhân viên cần kiểm tra trạng thái");
    let result = employees.findEmployeeIndexByName(name);
    if (typeof result == 'number') {
        let value = employees.checkEmployeeStatus(name);
        console.log(`Trạng thái nhân viên: ${value}`);
    }
    else if (Array.isArray(result)) {
        let phone = rl.question("Nhập thêm số điện thoại để kiểm tra (Nhân viên bị trùng tên)");
        let value = employees.checkEmployeeStatusByNameAndPhoneNumber(name, phone);
        console.log(`Trạng thái nhân viên: ${value}`);
    }
    else {
        console.log('Nhập sai tên hoặc nhân viên không tồn tại');
    }
}
function updateEmployeeInfo() {
    let name = rl.question("Nhập tên nhân viên cần cập nhật thông tin");
    let result = employees.findEmployeeIndexByName(name);
    if (typeof result == 'number' && employees.checkInstanceOf(result) === 1) {
        let salary = +rl.question("Nhập mức lương");
        if (isNaN(salary)) {
            salary = +rl.question("Nhập lại mức lương-- Nhập bằng số");
        }
        let address = rl.question("Nhập địa chỉ");
        let phone = rl.question("Nhập số điện thoại");
        let email = rl.question("Nhập địa chỉ email");
        let position = rl.question("Nhập vị trí công việc");
        let actualnumberofworkingdays = +rl.question("Nhập số ngày làm việc thực tế trong tháng");
        if (isNaN(actualnumberofworkingdays)) {
            actualnumberofworkingdays = +rl.question("Nhập lại số ngày làm việc thực tế trong tháng-- Nhập bằng số");
        }
        let person = new fulltime_employee_1.FullTimeEmployee(salary, name, address, phone, email, actualnumberofworkingdays, position);
        employees.updateEmployeeInfo(name, person);
        console.log("Cập nhật thành công");
    }
    else if (typeof result == 'number' && employees.checkInstanceOf(result) === 2) {
        let hours = +rl.question("Nhập số giờ làm việc");
        if (isNaN(hours)) {
            hours = +rl.question("Nhập lại số giờ làm việc-- Nhập bằng số");
        }
        let address = rl.question("Nhập địa chỉ");
        let phone = rl.question("Nhập số điện thoại");
        let email = rl.question("Nhập địa chỉ email");
        let position = rl.question("Nhập vị trí công việc");
        let priceWorkPerHour = +rl.question("Nhập mức lương theo giờ");
        if (isNaN(priceWorkPerHour)) {
            priceWorkPerHour = +rl.question("Nhập lại mức lương theo giờ -- Nhập bằng số");
        }
        let person = new part_time_employee_1.PartTimeEmployee(hours, name, address, phone, email, priceWorkPerHour, position);
        employees.updateEmployeeInfo(name, person);
        console.log("Cập nhật thành công");
    }
    else if (Array.isArray(result)) {
        let phone = rl.question("Nhập thêm số điện thoại của nhân viên (Bị trùng tên)");
        let index = employees.findEmployeeIndexByNameAndPhoneNumber(name, phone);
        if (employees.checkInstanceOf(index) === 1) {
            let salary = +rl.question("Nhập mức lương");
            if (isNaN(salary)) {
                salary = +rl.question("Nhập lại mức lương-- Nhập bằng số");
            }
            let address = rl.question("Nhập địa chỉ");
            let phone = rl.question("Nhập số điện thoại");
            let email = rl.question("Nhập địa chỉ email");
            let position = rl.question("Nhập vị trí công việc");
            let actualnumberofworkingdays = +rl.question("Nhập số ngày làm việc thực tế trong tháng");
            if (isNaN(actualnumberofworkingdays)) {
                actualnumberofworkingdays = +rl.question("Nhập lại số ngày làm việc thực tế trong tháng-- Nhập bằng số");
            }
            let person = new fulltime_employee_1.FullTimeEmployee(salary, name, address, phone, email, actualnumberofworkingdays, position);
            employees.updateEmployeeByNameAndPhoneNumber(name, person, phone);
            console.log("Cập nhật thành công");
        }
        else if (employees.checkInstanceOf(index) === 2) {
            let hours = +rl.question("Nhập số giờ làm việc");
            if (isNaN(hours)) {
                hours = +rl.question("Nhập lại số giờ làm việc-- Nhập bằng số");
            }
            let address = rl.question("Nhập địa chỉ");
            let phone = rl.question("Nhập số điện thoại");
            let email = rl.question("Nhập địa chỉ email");
            let position = rl.question("Nhập vị trí công việc");
            let priceWorkPerHour = +rl.question("Nhập mức lương theo giờ");
            if (isNaN(priceWorkPerHour)) {
                priceWorkPerHour = +rl.question("Nhập lại mức lương theo giờ -- Nhập bằng số");
            }
            let person = new part_time_employee_1.PartTimeEmployee(hours, name, address, phone, email, priceWorkPerHour, position);
            employees.updateEmployeeByNameAndPhoneNumber(name, person, phone);
            console.log("Cập nhật thành công");
        }
    }
    else {
        console.log('Nhập sai tên hoặc nhân viên không tồn tại');
    }
}
function updateEmployeeStatus() {
    let name = rl.question("Nhập tên nhân viên cần thay đổi status");
    let result = employees.findEmployeeIndexByName(name);
    if (typeof result == 'number') {
        employees.changeEmployeeStatus(name);
    }
    else if (Array.isArray(result)) {
        let phone = rl.question("Nhập số điện thoại nhân viên (có nhân viên cùng tên)");
        employees.changeEmployeeStatus_SameName(name, phone);
    }
}
function deleteEmployee() {
    let name = rl.question("Nhập tên nhân viên cần xóa");
    let result = employees.findEmployeeIndexByName(name);
    if (typeof result == 'number') {
        employees.deleteByName(name);
        if (employees.deleteByName(name)) {
            console.log(`Xóa thành công`);
        }
    }
    else if (Array.isArray(result)) {
        let phone = rl.question("Nhập số điện thoại (nhân viên bị trùng tên)");
        employees.deleteByName(name, phone);
        if (employees.deleteByName(name, phone)) {
            console.log(`Xóa thành công`);
        }
    }
}
function showEmployeeListByStatus() {
    let choice = -1;
    do {
        subMenuShowEmployeeByStatus();
        choice = +rl.question('Nhập lựa chọn: ');
        switch (choice) {
            case 1: {
                employees.showListOfEmployeesWhoIsWorking();
                break;
            }
            case 2: {
                employees.showListOfEmployeesWhoIsNotWorking();
                break;
            }
            case 0: {
                break;
            }
            default: {
                choice = +rl.question("Nhập lại lựa chọn");
                break;
            }
        }
    } while (choice != 0);
}
function showSalary() {
    let name = rl.question("Nhập tên nhân viên muốn tính lương");
    let result = employees.findEmployeeIndexByName(name);
    if (typeof result == 'number') {
        console.log(`Lương nhân viên ${name} : ${Math.round(employees.showSalary(name))}`);
    }
    if (Array.isArray(result)) {
        let phone = rl.question("Nhập số điện thoại (Nhân viên bị trùng tên)");
        console.log(`Lương nhân viên ${name} : ${Math.round(employees.showSalary_inputPhoneNumber(name, phone))}`);
    }
}
function run() {
}
do {
    menu();
    choice = +rl.question("Nhập lựa chọn");
    switch (choice) {
        case enum_1.MenuSelection.ADD_NEW_EMPLOYEE: {
            addNewEmployee();
            break;
        }
        case enum_1.MenuSelection.FIND_EMPLOYEE: {
            findEmployee();
            break;
        }
        case enum_1.MenuSelection.CHECK_EMPLOYEE_STATUS: {
            checkEmployeeStatus();
            break;
        }
        case enum_1.MenuSelection.UPDATE_EMPLOYEE_INFO: {
            updateEmployeeInfo();
            break;
        }
        case enum_1.MenuSelection.UPDATE_EMPLOYEE_STATUS: {
            updateEmployeeStatus();
            break;
        }
        case enum_1.MenuSelection.DELETE: {
            deleteEmployee();
            break;
        }
        case enum_1.MenuSelection.SHOW_EMPLOYEE_LIST_BY_STATUS: {
            showEmployeeListByStatus();
            break;
        }
        case enum_1.MenuSelection.SHOW_SALARY: {
            showSalary();
            break;
        }
        case enum_1.MenuSelection.SHOW_USER_ACC_INFOR: {
            break;
        }
        case enum_1.MenuSelection.EXIT: {
            break;
        }
    }
} while (choice != enum_1.MenuSelection.EXIT);
//# sourceMappingURL=mainEmployee.js.map