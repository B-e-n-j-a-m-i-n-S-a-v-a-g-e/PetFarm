var Employee = (function () {
    function Employee(name, salary, x, y) {
        this.name = name;
        this.salary = salary;
        this.isFormallyHired = false;
        //Current money initialized to zero. Easier for the simulation if employees live paycheck to paycheck.
        this.currentMoney = 0;
    }
    Employee.prototype.getCurrentMoney = function () {
        return this.currentMoney;
    };
    Employee.prototype.setCurrentMoney = function (money) {
        this.currentMoney = money;
    };
    Employee.prototype.getName = function () {
        return this.name;
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.setSalary = function (newSalary) {
        this.salary = newSalary;
    };
    Employee.prototype.getIsFormallyHired = function () {
        return this.isFormallyHired;
    };
    Employee.prototype.setIsFormallyHired = function (isHired) {
        this.isFormallyHired = isHired;
    };
    return Employee;
})();
//# sourceMappingURL=Employee.js.map