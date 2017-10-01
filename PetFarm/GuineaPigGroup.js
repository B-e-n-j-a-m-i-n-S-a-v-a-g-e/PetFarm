var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GuineaPigGroup = (function (_super) {
    __extends(GuineaPigGroup, _super);
    function GuineaPigGroup() {
        _super.call(this);
        this.type = "GuineaPigGroup";
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
    GuineaPigGroup.prototype.addMultipleGP = function (first) {
        var last = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            last[_i - 1] = arguments[_i];
        }
        for (var i = 0; i < arguments.length; i++) {
            this.addGP(arguments[i]);
        }
    };
    GuineaPigGroup.prototype.getNumGuineaPigs = function () {
        return this.guineaPigs.length;
    };
    GuineaPigGroup.prototype.moveGPToDifferentGroup = function (source, target) {
        this.removeGP(source);
        target.addGP(source);
    };
    return GuineaPigGroup;
})(GameObject);
