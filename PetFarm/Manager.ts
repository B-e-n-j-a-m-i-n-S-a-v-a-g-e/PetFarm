class Manager {

    managedEmployees: IEmployee[];
    name: string;
    salary: number;
    currentMoney: number;

    constructor(name: string, salary: number) {
        this.managedEmployees = [];
        this.name = name;
        this.salary = salary;
        this.currentMoney = 0;

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

    getCurrentMoney() {
        return this.currentMoney;
    }
    setCurrentMoney(money: number) {
        this.currentMoney = money;
    }

    addEmployee(employee: IEmployee) {
        this.managedEmployees.push(employee);
    }
    removeEmployee(employee: IEmployee) {
        let index = this.managedEmployees.indexOf(employee);

        if (index > -1) {
            this.managedEmployees.splice(index, 1);
        }
    }
    getNumManagedEmployees() {
        return this.managedEmployees.length;
    }

    fireEmployee(employee: IEmployee) {

        this.removeEmployee(employee);
        employee.setIsFormallyHired(false);
        employee = null;

    }
    hireEmployee(employee: IEmployee) {

        this.addEmployee(employee);
        employee.setIsFormallyHired(true);
    }
}