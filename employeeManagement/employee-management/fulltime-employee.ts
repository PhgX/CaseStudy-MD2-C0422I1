import { Employee } from "../model/employee";

export class FullTimeEmployee extends Employee {
    private _salary: number;
    private _actualnumberofworkingdays: number = 26;
    constructor(salary: number,
                name: string,                
                address: string,
                phone: string,
                email: string,
                actualnumberofworkingdays: number,                
                position: string) {
                super(name, address, phone, email, position);
                this._salary = salary;
                this._actualnumberofworkingdays = actualnumberofworkingdays;
    }

    get salary() {
        return this._salary;
    }
    set salary(salary: number) {
        this._salary = salary
    }

    get actualnumberofworkingdays(){
        return this._actualnumberofworkingdays;
    }
    set actualnumberofworkingdays(value: number){
        this._actualnumberofworkingdays = value;
    }
}