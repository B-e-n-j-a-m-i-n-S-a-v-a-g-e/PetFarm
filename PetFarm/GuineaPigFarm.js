/*
 * Guinea Pig Farm is an application which allows the user to
 * breed guinea pigs or various colors and hair lengths.
 *
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GuineaPigFarm = (function (_super) {
    __extends(GuineaPigFarm, _super);
    function GuineaPigFarm() {
        _super.call(this);
        this.init();
    }
    GuineaPigFarm.prototype.init = function () {
        // this.actionManager.performDailyActions();
    };
    return GuineaPigFarm;
})(GameObject);
