var Vector2D = (function () {
    function Vector2D(x, y) {
        this.x = x;
        this.y = y;
    }
    Vector2D.prototype.getX = function () {
        return this.x;
    };
    Vector2D.prototype.setX = function (x) {
        this.x = x;
    };
    Vector2D.prototype.getY = function () {
        return this.y;
    };
    Vector2D.prototype.setY = function (y) {
        this.y = y;
    };
    return Vector2D;
})();
