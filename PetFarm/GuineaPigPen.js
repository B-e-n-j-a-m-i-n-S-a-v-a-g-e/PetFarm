var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GuineaPigPen = (function (_super) {
    __extends(GuineaPigPen, _super);
    function GuineaPigPen(x, y, width, height, thickness, color) {
        _super.call(this);
        this.type = "GuineaPigPen";
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.thickness = thickness;
        this.color = color;
    }
    GuineaPigPen.prototype.getX = function () {
        return this.x;
    };
    GuineaPigPen.prototype.getY = function () {
        return this.y;
    };
    GuineaPigPen.prototype.getWidth = function () {
        return this.width;
    };
    GuineaPigPen.prototype.getHeight = function () {
        return this.height;
    };
    GuineaPigPen.prototype.getThickness = function () {
        return this.thickness;
    };
    GuineaPigPen.prototype.getColor = function () {
        return this.color;
    };
    return GuineaPigPen;
})(GameObject);
//# sourceMappingURL=GuineaPigPen.js.map