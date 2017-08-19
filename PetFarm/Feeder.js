var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Feeder = (function (_super) {
    __extends(Feeder, _super);
    function Feeder() {
        _super.apply(this, arguments);
        this.totalAmountOfFoodUsed = 0;
        this.feedingQuantity = 20;
    }
    Feeder.prototype.getFeedingQuantity = function () {
        return this.feedingQuantity;
    };
    Feeder.prototype.setFeedingQuantity = function (quantity) {
        this.feedingQuantity = quantity;
    };
    Feeder.prototype.feedSingleGuineaPig = function (gp, amount) {
        gp.setFoodLevel(gp.getFoodLevel() + amount);
    };
    Feeder.prototype.feedMultipleGuineaPigs = function (gpGroup, amount) {
        //Iterate through group of pigs & feeds them. Adds amount to totalAmountOfFoodUsed
        for (var i = 0; i < gpGroup.getNumGuineaPigs(); i++) {
            gpGroup.guineaPigs[i].setFoodLevel(gpGroup.guineaPigs[i].getFoodLevel() + this.feedingQuantity);
            this.totalAmountOfFoodUsed += this.feedingQuantity;
        }
    };
    return Feeder;
})(Employee);
//# sourceMappingURL=Feeder.js.map