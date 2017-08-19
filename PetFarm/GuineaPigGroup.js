var GuineaPigGroup = (function () {
    function GuineaPigGroup() {
        this.guineaPigs = [];
    }
    GuineaPigGroup.prototype.removeGP = function (gp) {
        var index = this.guineaPigs.indexOf(gp);
        if (index > -1) {
            this.guineaPigs.splice(index, 1);
        }
    };
    GuineaPigGroup.prototype.addGP = function (gp) {
        this.guineaPigs.push(gp);
    };
    GuineaPigGroup.prototype.getNumGuineaPigs = function () {
        return this.guineaPigs.length;
    };
    GuineaPigGroup.prototype.moveGPToDifferentGroup = function (source, target) {
        this.removeGP(source);
        target.addGP(source);
    };
    return GuineaPigGroup;
})();
//# sourceMappingURL=GuineaPigGroup.js.map