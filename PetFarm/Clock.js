var TimeMeasurement = {
    tick: 0,
    numDaysElapsed: 0,
    numMonthsElapsed: 0,
    numYearsElapsed: 0
};
var Clock = (function () {
    function Clock() {
        this.AM = "am";
        this.PM = "pm";
        this.currentTime = 0;
        this.displayTime = false;
    }
    Clock.prototype.toggleDisplayCurrentTime = function (val) {
        this.displayTime = val;
    };
    Clock.prototype.displayCurrentTime = function () {
        var am = "AM";
        var pm = "PM";
        if (this.displayTime) {
            if (TimeMeasurement.tick < 12) {
                console.log(TimeMeasurement.tick + am);
            }
            else {
                console.log(TimeMeasurement.tick + pm);
            }
            console.log(TimeMeasurement.tick);
        }
    };
    Clock.prototype.createTickInterval = function (ctx) {
        window.setInterval(this.tick, 1000, ctx);
    };
    //Main update loop for game. Owned by Stage.
    Clock.prototype.tick = function (ctx) {
        if (TimeMeasurement.tick === 23) {
            TimeMeasurement.tick = 0;
            TimeMeasurement.numDaysElapsed++;
        }
        if (TimeMeasurement.numDaysElapsed === 30) {
            TimeMeasurement.numMonthsElapsed++;
            TimeMeasurement.numDaysElapsed = 0;
        }
        if (TimeMeasurement.numMonthsElapsed === 12) {
            TimeMeasurement.numYearsElapsed = 0;
            TimeMeasurement.numMonthsElapsed = 0;
        }
        TimeMeasurement.tick++;
        this.guineaPigMoveDirection = Math.floor(Math.random() * Object.keys(Color).length / 2);
        //Updates everything on stage
        ctx.update();
    };
    return Clock;
})();
//# sourceMappingURL=Clock.js.map