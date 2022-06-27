import { Employee } from "../model/employee";

export class PartTimeEmployee extends Employee {
    private _hours: number;
    private _priceWorkPerHour: number;
    constructor(
        hours: number,        
        name: string,        
        address: string,
        phone: string,
        email: string,
        priceWorkPerHour: number,
        position: string) {
        super(name, address, phone, email, position);
        this._hours = hours;
        this._priceWorkPerHour = priceWorkPerHour;
    }
    get hours() {
        return this._hours;
    }
    set hours(hour: number) {
        hour
    }
    
    get price(){
        return this._priceWorkPerHour;
    }
    set price(priceWorkPerHour: number){
        this._priceWorkPerHour = priceWorkPerHour;
    }

    getPartTimeSalary(){
        let parttimesalary = this.hours * this.price;
        console.log(`Tên: ${this.name} là nhân viên part time có lương tháng: ${parttimesalary}`);
    }
}