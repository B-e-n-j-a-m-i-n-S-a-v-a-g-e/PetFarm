var GuineaPigPen = (function () {
    function GuineaPigPen(x, y, width, height, thickness, color) {
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
})();
//# sourceMappingURL=GuineaPigPen.js.map