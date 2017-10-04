var Manager = (function () {
    function Manager(name, salary) {
        this.managedEmployees = [];
        this.name = name;
        this.salary = salary;
        this.currentMoney = 0;
    }
    Manager.prototype.getName = function () {
        return this.name;
    };
    Manager.prototype.getSalary = function () {
        return this.salary;
    };
    Manager.prototype.setSalary = function (newSalary) {
        this.salary = newSalary;
    };
    Manager.prototype.getCurrentMoney = function () {
        return this.currentMoney;
    };
    Manager.prototype.setCurrentMoney = function (money) {
        this.currentMoney = money;
    };
    Manager.prototype.addEmployee = function (employee) {
        this.managedEmployees.push(employee);
    };
    Manager.prototype.removeEmployee = function (employee) {
        var index = this.managedEmployees.indexOf(employee);
        if (index > -1) {
            this.managedEmployees.splice(index, 1);
        }
    };
    Manager.prototype.getNumManagedEmployees = function () {
        return this.managedEmployees.length;
    };
    Manager.prototype.fireEmployee = function (employee) {
        this.removeEmployee(employee);
        employee.setIsFormallyHired(false);
        employee = null;
    };
    Manager.prototype.hireEmployee = function (employee) {
        this.addEmployee(employee);
        employee.setIsFormallyHired(true);
    };
    return Manager;
})();
