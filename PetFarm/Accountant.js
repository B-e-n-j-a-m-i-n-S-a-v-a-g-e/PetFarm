var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Accountant = (function (_super) {
    __extends(Accountant, _super);
    function Accountant() {
        _super.apply(this, arguments);
    }
    Accountant.prototype.payPaycheck = function (receiver) {
        //Let's pretend this is a perfect world without taxes.
        var paycheck = Number(receiver.getSalary()) / 12;
        if (receiver.getIsFormallyHired()) {
            receiver.setCurrentMoney(Number(receiver.getCurrentMoney()) + paycheck);
        }
    };
    Accountant.prototype.payManagerPaycheck = function (receiver) {
        var paycheck = Number(receiver.getSalary()) / 12;
        receiver.setCurrentMoney(Number(receiver.getCurrentMoney()) + paycheck);
    };
    return Accountant;
})(Employee);
//# sourceMappingURL=Accountant.js.map