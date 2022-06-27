export interface IEmployee<T> {
    addNewEmployee(t: T): void;
    checkEmployeeStatus(name: string): boolean;
    updateEmployeeInfo(name: string, employee: T, phone: string): boolean;
    changeEmployeeStatus(name: string): boolean;
    showAccountInfo(): any;
    delete(name: string): void;
}
