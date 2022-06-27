import { Employee } from '../model/employee';
import { FullTimeEmployee } from "./fulltime-employee";
import { IEmployeeManagement } from "./i-employee-management";
import { PartTimeEmployee } from './part-time-employee';
export declare class EmployeeManagement implements IEmployeeManagement<Employee> {
    private static employees;
    getdata(): Employee[];
    addNewEmployee(t: Employee): void;
    findEmployee(name: string): any;
    findEmployeeByNameandPhoneNumber(name: string, phone: string): any;
    findEmployeeIndexByName(name: string): number | number[] | undefined;
    findEmployeeIndexByNameAndPhoneNumber(name: string, phone: string): number | undefined;
    checkEmployeeStatus(name: string): any;
    checkEmployeeStatusByNameAndPhoneNumber(name: string, phone: string): any;
    changeEmployeeStatus(name: string): any;
    changeEmployeeStatus_SameName(name: string, phone: string): any;
    updateEmployeeInfo(name: string, t: Employee): boolean;
    updateEmployeeByNameAndPhoneNumber(name: string, t: Employee, phone: string): boolean;
    delete(name: string, phone?: string): void;
    checkInstanceOfByIndex(index: number): number;
    checkInstanceOfByNameAndPhoneNumber(name: string, phone: string): FullTimeEmployee | PartTimeEmployee;
    fulltimeSalaryCaculation(t: FullTimeEmployee, actualnumberofworkingdays?: number): number;
    parttimeSalaryCaculation(t: PartTimeEmployee, hours?: number): number;
    showListOfEmployeesWhoIsWorking(): void;
    showListOfEmployeesWhoIsNotWorking(): void;
    showAccountInfo(): void;
}
