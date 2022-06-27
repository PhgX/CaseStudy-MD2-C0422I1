import { IEmployee } from "./i-management";

export interface IEmployeeManagement<T> extends IEmployee<T> { 
      
    findEmployee(name: string): T;    

}