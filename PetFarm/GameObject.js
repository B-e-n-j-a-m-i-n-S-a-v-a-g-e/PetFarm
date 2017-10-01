var GameObject = (function () {
    function GameObject() {
        this.id = 0;
        this.id++;
    }
    GameObject.prototype.getID = function () {
        return this.id;
    };
    GameObject.prototype.setID = function (newID) {
        this.id = newID;
    };
    return GameObject;
})();
//# sourceMappingURL=GameObject.js.map