var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GuineaPigPoop = (function (_super) {
    __extends(GuineaPigPoop, _super);
    function GuineaPigPoop(x, y) {
        _super.call(this);
        this.size = 5;
        this.x = x;
        this.y = y;
    }
    GuineaPigPoop.prototype.getX = function () {
        return this.x;
    };
    GuineaPigPoop.prototype.getY = function () {
        return this.y;
    };
    return GuineaPigPoop;
})(GameObject);
