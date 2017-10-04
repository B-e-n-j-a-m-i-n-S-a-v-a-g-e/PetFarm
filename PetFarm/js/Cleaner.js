var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Cleaner = (function (_super) {
    __extends(Cleaner, _super);
    function Cleaner() {
        _super.apply(this, arguments);
        this.totalPoopCleaned = 0;
    }
    Cleaner.prototype.cleanSingleGuineaPig = function (gp) {
        this.totalPoopCleaned += gp.getPoopAmount();
        gp.setPoopAmount(0);
    };
    Cleaner.prototype.cleanGuineaPigGroup = function (gpGroup) {
        //Iterates through group of pigs, removes their poop and sets their poop amount to 0.
        for (var i = 0; i < gpGroup.getNumGuineaPigs(); i++) {
            this.totalPoopCleaned += gpGroup.guineaPigs[i].getPoopAmount();
            gpGroup.guineaPigs[i].setPoopAmount(0);
            console.log(this.totalPoopCleaned);
        }
    };
    return Cleaner;
})(Employee);
