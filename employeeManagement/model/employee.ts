import { WorkingStatus } from "./enum";

export class Employee {
    private _name: string;   
    private _address: string;
    private _phone: string;
    private _email: string;
    private _position: string;       
    private _status: WorkingStatus = WorkingStatus.WORK;
    
    constructor (
        name: string,         
        address: string, 
        phone: string, 
        email: string, 
        position: string,    
       ){
        this._address = address;        
        this._name = name;
        this._email = email;
        this._position = position;
        this._phone = phone;
      
    }
    get name(){
        return this._name;
    }
    set name(name: string){
        this._name = name;
    }
    

    get address(){
        return this._address;
    }
    set address(address: string){
        this._address = address;
    }

    get phone(){
        return this._phone;
    }
    set phone(phone: string){
        this._phone = phone;
    }

    get email(){
        return this._email;
    }
    set email(email: string){
        this._email = email;
    }

    get position(){
        return this._position;
    }
    set position(position: string){
        this._position = position;
    }   

    get status(){
        return this._status;
    }
    set status(status: WorkingStatus){
        this._status = status;
    }
}