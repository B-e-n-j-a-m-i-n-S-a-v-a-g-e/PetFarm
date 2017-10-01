var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(name, salary, x, y) {
        _super.call(this);
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
})(GameObject);
//# sourceMappingURL=Employee.js.map