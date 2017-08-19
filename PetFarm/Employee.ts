class Employee implements IEmployee {

    private name: string;
    private salary: number;
    private currentMoney: number;
    private isFormallyHired: boolean;
    private x: number;
    private y: number;
    
    constructor(name: string, salary: number, x: number, y: number) {
        this.name = name;
        this.salary = salary;
        this.isFormallyHired = false;

        //Current money initialized to zero. Easier for the simulation if employees live paycheck to paycheck.
        this.currentMoney = 0;
    }

    getCurrentMoney() {
        return this.currentMoney;
    }
    setCurrentMoney(money: number) {
        this.currentMoney = money;
    }
    getName() {
        return this.name;
    }    
    getSalary() {
        return this.salary;
    }
    setSalary(newSalary: number) {
        this.salary = newSalary;
    }
    getIsFormallyHired() {
        return this.isFormallyHired;
    }
    setIsFormallyHired(isHired: boolean) {
        this.isFormallyHired = isHired;
    }
}