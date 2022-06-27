import { Employee } from "../model/employee";
export declare class PartTimeEmployee extends Employee {
    private _hours;
    private _priceWorkPerHour;
    constructor(hours: number, name: string, address: string, phone: string, email: string, priceWorkPerHour: number, position: string);
    get hours(): number;
    set hours(hour: number);
    get price(): number;
    set price(priceWorkPerHour: number);
    getPartTimeSalary(): void;
}
