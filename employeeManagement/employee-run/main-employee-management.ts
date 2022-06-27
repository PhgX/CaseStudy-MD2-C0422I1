import { EmployeeManagement } from '../employee-management/employee-management';
import { MenuSelection } from '../model/enum';
import { FullTimeEmployee } from '../employee-management/fulltime-employee';
import { PartTimeEmployee } from '../employee-management/part-time-employee';
import * as rl from 'readline-sync'
import { Menu } from '../menu-E-Management/menuEM';
import { LoginMenu } from '../../login/login/login';

export class MainEmployeeManagement {
    private employees = new EmployeeManagement();
    private allmenu = new Menu()

    writeData(){
        const fs = require('fs');
        let value = new EmployeeManagement()        
        let data = JSON.stringify(value.getdata(), null, 2);
        fs.writeFileSync("./all_employees.txt", data);   
    }

    // readData(){
    //     throw new Error (`Nothing here!`)
    // }

    addNewFullTimeEmployee() {
        let salary: number;
        let actualnumberofworkingdays: number;
        let name: string, address: string, phone: string, email: string, position: string;
        do {
            name = rl.question("Nhập tên nhân viên mới!");
        } while (!name || !isNaN(parseInt(name)))
        do {
            address = rl.question("Nhập địa chỉ");
        } while (!address || !isNaN(parseInt(address)))
        do {
            phone = rl.question("Nhập số điện thoại");
        } while (!phone || isNaN(parseInt(phone)))
        do {
            email = rl.question("Nhập địa chỉ email");
        } while (!email || !isNaN(parseInt(email)))
        do {
            position = rl.question("Nhập vị trí công việc");
        } while (!position || !isNaN(parseInt(position)));
        do {
            salary = +rl.question("Nhập mức lương theo hợp đồng --- Nhập bằng số --- Lớn hơn 0");
        } while (isNaN(salary) || salary <= 0);
        do {
            actualnumberofworkingdays = +rl.question("Nhập số ngày làm việc thực tế -- Nhập bằng số -- trong khoảng 0 đến 31");
        } while (isNaN(actualnumberofworkingdays) || actualnumberofworkingdays < 0 || actualnumberofworkingdays > 31 || !actualnumberofworkingdays)
        let person = new FullTimeEmployee(salary, name, address, phone, email, actualnumberofworkingdays, position);
        this.employees.addNewEmployee(person);
        console.log(`---Thêm nhân viên thành công----`);     
       this.writeData();
    }

    addNewPartTimeEmployee() {
        let hours: number;
        let priceWorkPerHour: number;
        let name: string, address: string, phone: string, email: string, position: string;

        do {
            name = rl.question("Nhập tên nhân viên mới!");
        } while (!name || !(isNaN(parseInt(name))))
        do {
            address = rl.question("Nhập địa chỉ");
        } while (!address || !isNaN(parseInt(address)))
        do {
            phone = rl.question("Nhập số điện thoại");
        } while (!phone || isNaN(parseInt(phone)))
        do {
            email = rl.question("Nhập địa chỉ email");
        } while (!email || !isNaN(parseInt(position)))
        do {
            position = rl.question("Nhập vị trí công việc");
        } while (!position || !isNaN(parseInt(position)));
        do {
            hours = +rl.question("---Nhập lại số giờ làm việc---Nhập bằng số và tổng thời gian không quá 240 tiếng");
        } while (isNaN(hours) || hours < 0 || hours > 240 || !hours)

        do {
            priceWorkPerHour = +rl.question("Nhập lại mức lương theo giờ -- Nhập bằng số");
        } while (isNaN(priceWorkPerHour) || priceWorkPerHour <= 0 || !priceWorkPerHour)
        let person = new PartTimeEmployee(hours, name, address, phone, email, priceWorkPerHour, position);
        this.employees.addNewEmployee(person);
        console.log(`---Thêm nhân viên thành công----`);
        this.writeData();
    }

    findEmployee() {
        let name: string;
        do {
            name = rl.question("Nhập tên nhân viên cần tìm");
        } while (!name || !(isNaN(parseInt(name))))
        let result = this.employees.findEmployeeIndexByName(name);
        if (typeof result === 'number') {
            this.employees.findEmployee(name);
        }
        if (Array.isArray(result)) {
            let phone = rl.question("Nhập thêm số điện thoại nhân viên cần tìm")
            this.employees.findEmployeeByNameandPhoneNumber(name, phone);
        }
        else {
            console.log('Không tìm thấy nhân viên')
        }
    }

    checkEmployeeStatus() {
        let name: string;
        do {
            name = rl.question("Nhập tên nhân viên cần kiểm tra trạng thái");
        } while (!name || !(isNaN(parseInt(name))));
        let result = this.employees.findEmployeeIndexByName(name);
        if (typeof result == 'number') {
            let value = this.employees.checkEmployeeStatus(name);
            console.log(`Trạng thái nhân viên: ${value}`);
        } else if (Array.isArray(result)) {
            let phone = rl.question("Nhập thêm số điện thoại để kiểm tra (Nhân viên bị trùng tên)")
            let value = this.employees.checkEmployeeStatusByNameAndPhoneNumber(name, phone);
            console.log(`Trạng thái nhân viên: ${value}`);
        } else {
            console.log('Nhập sai tên hoặc nhân viên không tồn tại')
        }
    }

    updateEmployeeInfo() {
        let name: string;
        do {
            name = rl.question("Nhập tên nhân viên cần cập nhật thông tin");
        } while (!name || !isNaN(parseInt(name)));
        let result = this.employees.findEmployeeIndexByName(name);
        if (typeof result == 'number' && this.employees.checkInstanceOfByIndex(result) === 1) {
            let actualnumberofworkingdays: number;
            let salary: number;
            let address: string, phone: string, email: string, position: string;
            do {
                address = rl.question("Nhập địa chỉ");
            } while (!address || !isNaN(parseInt(address)))
            do {
                phone = rl.question("Nhập số điện thoại");
            } while (!phone || isNaN(parseInt(phone)))
            do {
                email = rl.question("Nhập địa chỉ email");
            } while (!email || !isNaN(parseInt(email)))
            do {
                position = rl.question("Nhập vị trí công việc");
            } while (!position || !isNaN(parseInt(position)));
            do {
                salary = +rl.question("Nhập mức lương theo hợp đồng --- Nhập bằng số --- Lớn hơn 0");
            } while (isNaN(salary) || salary <= 0 || !salary);
            do {
                actualnumberofworkingdays = +rl.question("Nhập số ngày làm việc thực tế -- Nhập bằng số -- trong khoảng 0 đến 31");
            } while (isNaN(actualnumberofworkingdays) || actualnumberofworkingdays < 0 || actualnumberofworkingdays > 31 || !actualnumberofworkingdays)
            let person = new FullTimeEmployee(salary, name, address, phone, email, actualnumberofworkingdays, position);
            this.employees.updateEmployeeInfo(name, person);
            console.log("Cập nhật thành công");
        } else if (typeof result == 'number' && this.employees.checkInstanceOfByIndex(result) === 2) {
            let hours: number;
            let actualnumberofworkingdays: number;
            let priceWorkPerHour: number;
            let address: string, phone: string, email: string, position: string;
            do {
                hours = +rl.question("---Nhập lại số giờ làm việc---Nhập bằng số và tổng thời gian không quá 240 tiếng");
            } while (isNaN(hours) || hours < 0 || hours > 240 || !hours)
            do {
                address = rl.question("Nhập địa chỉ");
            } while (!address || !isNaN(parseInt(address)))
            do {
                phone = rl.question("Nhập số điện thoại");
            } while (!phone || isNaN(parseInt(phone)))
            do {
                email = rl.question("Nhập địa chỉ email");
            } while (!email || !isNaN(parseInt(email)))
            do {
                position = rl.question("Nhập vị trí công việc");
            } while (!position || !isNaN(parseInt(position)));
            do {
                actualnumberofworkingdays = +rl.question("Nhập số ngày làm việc thực tế -- Nhập bằng số -- trong khoảng 0 đến 31");
            } while (isNaN(actualnumberofworkingdays) || actualnumberofworkingdays < 0 || actualnumberofworkingdays > 31 || !actualnumberofworkingdays)
            do {
                priceWorkPerHour = +rl.question("Nhập lại mức lương theo giờ -- Nhập bằng số");
            } while (isNaN(priceWorkPerHour) || priceWorkPerHour < 0 || !priceWorkPerHour)
            let person = new PartTimeEmployee(hours, name, address, phone, email, priceWorkPerHour, position);
            this.employees.updateEmployeeInfo(name, person);
            console.log("Cập nhật thành công");
        } else if (Array.isArray(result)) {
            let phone: string;
            do {
                phone = rl.question("Nhập thêm số điện thoại của nhân viên (Bị trùng tên)");
            } while (!phone || isNaN(parseInt(phone)))
            let index = this.employees.findEmployeeIndexByNameAndPhoneNumber(name, phone);
            if (this.employees.checkInstanceOfByIndex(index) === 1) {
                let salary: number;
                let actualnumberofworkingdays: number;
                let address: string, phone: string, email: string, position: string;
                do {
                    salary = +rl.question("Nhập mức lương theo hợp đồng --- Nhập bằng số --- Lớn hơn 0");
                } while (isNaN(salary) || salary <= 0 || !salary);
                do {
                    address = rl.question("Nhập địa chỉ");
                } while (!address || !isNaN(parseInt(address)))
                do {
                    phone = rl.question("Nhập số điện thoại");
                } while (!phone || isNaN(parseInt(phone)))
                do {
                    email = rl.question("Nhập địa chỉ email");
                } while (!email || !isNaN(parseInt(email)))
                do {
                    position = rl.question("Nhập vị trí công việc");
                } while (!position || !isNaN(parseInt(position)));
                do {
                    actualnumberofworkingdays = +rl.question("Nhập số ngày làm việc thực tế -- Nhập bằng số -- trong khoảng 0 đến 31");
                } while (isNaN(actualnumberofworkingdays) || actualnumberofworkingdays < 0 || actualnumberofworkingdays > 31 || !actualnumberofworkingdays);
                let person = new FullTimeEmployee(salary, name, address, phone, email, actualnumberofworkingdays, position);
                this.employees.updateEmployeeByNameAndPhoneNumber(name, person, phone);
                console.log("Cập nhật thành công");
            } else if (this.employees.checkInstanceOfByIndex(index) === 2) {
                let hours: number;
                let priceWorkPerHour: number;
                let address: string, phone: string, email: string, position: string;
                do {
                    hours = +rl.question("---Nhập lại số giờ làm việc---Nhập bằng số và tổng thời gian không quá 240 tiếng");
                } while (isNaN(hours) || hours < 0 || hours > 240 || !hours);
                do {
                    address = rl.question("Nhập địa chỉ");
                } while (!address || !isNaN(parseInt(address)))
                do {
                    phone = rl.question("Nhập số điện thoại");
                } while (!phone || isNaN(parseInt(phone)))
                do {
                    email = rl.question("Nhập địa chỉ email");
                } while (!email || !isNaN(parseInt(email)))
                do {
                    position = rl.question("Nhập vị trí công việc");
                } while (!position);
                do {
                    priceWorkPerHour = +rl.question("Nhập lại mức lương theo giờ -- Nhập bằng số");
                } while (isNaN(priceWorkPerHour) || priceWorkPerHour < 0 || !priceWorkPerHour);
                let person = new PartTimeEmployee(hours, name, address, phone, email, priceWorkPerHour, position);
                this.employees.updateEmployeeByNameAndPhoneNumber(name, person, phone);
                console.log("Cập nhật thành công");
            }
        } else {
            console.log('Nhập sai tên hoặc nhân viên không tồn tại')
        }

    }

    updateEmployeeStatus() {
        let name: string;
        do {
            name = rl.question("Nhập tên nhân viên cần thay đổi status");
        } while (!name || !(isNaN(parseInt(name))));
        let result = this.employees.findEmployeeIndexByName(name);
        if (typeof result == 'number') {
            this.employees.changeEmployeeStatus(name);
        } else if (Array.isArray(result)) {
            let phone = rl.question("Nhập số điện thoại nhân viên (có nhân viên cùng tên)")
            this.employees.changeEmployeeStatus_SameName(name, phone);
        } else {
            console.log('Không tìm thấy nhân viên')
        }
    }

    deleteEmployee(): void {
        let name: string;
        let phone: string;
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

            } while (!phone || isNaN(parseInt(phone)))
            this.employees.delete(name, phone);
            console.log(`Xóa thành công`);
        } else {
            console.log(`Nhân viên không tồn tại`);
        }
    }

    employeeSalaryCalculation() {
        let name: string, phone: string;
        do {
            name = rl.question("nhập tên nhân viên");
        } while (!name || !(isNaN(parseInt(name))));
        do {
            phone = rl.question("nhập số điện thoại nhân viên");
        } while (!phone || isNaN(parseInt(phone)))        
        let salary: number;
        let employee = this.employees.checkInstanceOfByNameAndPhoneNumber(name, phone)
        if (employee instanceof FullTimeEmployee) {
            let actualnumberofworkingdays: number;
            do {
                actualnumberofworkingdays = +rl.question("Nhập lại số ngày làm việc thực tế (nếu cần) -- Nhập bằng số -- trong khoảng 0 đến 31");
            } while (isNaN(actualnumberofworkingdays) || actualnumberofworkingdays < 0 || actualnumberofworkingdays > 31 || !actualnumberofworkingdays)
           
            salary = this.employees.fulltimeSalaryCaculation(employee, actualnumberofworkingdays)
            console.log('Tên nhân viên: ' + employee.name + '(Hợp đồng toàn thời gian');
            if (!actualnumberofworkingdays) {
                console.log('Số ngày làm việc thực tế là: ' + employee.actualnumberofworkingdays)
            } else if (actualnumberofworkingdays) {
                console.log('Số ngày làm việc thực tế là: ' + actualnumberofworkingdays)
            }
            console.log(`Mức lương theo hợp đồng: ${employee.salary}
                        Tổng số lương thực nhận: ${salary}`);
        } else if (employee instanceof PartTimeEmployee) {
            let hours: number;
            do {
                hours = +rl.question("---Nhập số giờ làm thực tế nếu cần---Nhập bằng số và tổng thời gian không quá 240 tiếng");
            } while (isNaN(hours) || hours < 0 || hours > 240)           
            salary = this.employees.parttimeSalaryCaculation(employee, hours);
            console.log('Tên nhân viên: ' + employee.name + '(Hợp đồng bán thời gian');
            if (!hours) {
                console.log('Số giờ làm việc thực tế là: ' + employee.hours);
            } else if (hours) {
                console.log('Số giờ làm việc thực tế là: ' + hours);
            }
            console.log(`Mỗi giờ được trả: ${employee.price}
                        Tổng số lương thực nhận: ${salary}`)
        }
    }

    // checkAccountRole(value: number) {
    //     if (value === 0) {
    //         console.log(`Tài khoản thường`);
    //     } else if (value === 1) {
    //         console.log(`Tài khoản Admin`);
    //     }
    // }



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
        } while (choice != 0)
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
                    this.addNewPartTimeEmployee()
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
        let allinfo = new LoginMenu();
        allinfo.showAccInfor();
    }

    logout_clearInfo() {
        let clearinfo = new LoginMenu();
        clearinfo.logout_Clear_Info();
    }

    adminRun() {
        let choice = -1;
        do {
            this.allmenu.menu();
            choice = +rl.question("Nhập lựa chọn");
            switch (choice) {
                case MenuSelection.ADD_NEW_EMPLOYEE: {
                    this.addNewEmployeeMenuChoice();
                    break;
                }
                case MenuSelection.FIND_EMPLOYEE: {
                    this.findEmployee();
                    break;
                }
                case MenuSelection.CHECK_EMPLOYEE_STATUS: {
                    this.checkEmployeeStatus();
                    break;
                }
                case MenuSelection.UPDATE_EMPLOYEE_INFO: {
                    this.updateEmployeeInfo();
                    break;
                }
                case MenuSelection.UPDATE_EMPLOYEE_STATUS: {
                    this.updateEmployeeStatus();
                    break;
                }
                case MenuSelection.DELETE: {
                    this.deleteEmployee();
                    break;
                }
                case MenuSelection.SHOW_EMPLOYEE_LIST_BY_STATUS: {
                    this.showEmployeeListByStatusMenuChoice();
                    break;
                }
                case MenuSelection.SHOW_SALARY: {
                    this.employeeSalaryCalculation();
                    break;
                }
                case MenuSelection.SHOW_USER_ACC_INFOR: {
                    this.getAccountInfo();
                    break;
                }
                case MenuSelection.EXIT: {
                    this.logout_clearInfo();
                    break;
                }
            }
        } while (choice != MenuSelection.EXIT)
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
        } while (choice != MenuSelection.EXIT)
    }
}


