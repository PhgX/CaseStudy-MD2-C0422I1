import { Employee } from "../model/employee";
export declare class FullTimeEmployee extends Employee {
    private _salary;
    private _actualnumberofworkingdays;
    constructor(salary: number, name: string, address: string, phone: string, email: string, actualnumberofworkingdays: number, position: string);
    get salary(): number;
    set salary(salary: number);
    get actualnumberofworkingdays(): number;
    set actualnumberofworkingdays(value: number);
}
