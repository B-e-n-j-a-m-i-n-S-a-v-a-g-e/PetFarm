let TimeMeasurement = {

    tick : 0, // Better as member variables, but having scoping issues with setInterval below.
    numDaysElapsed: 0,
    numMonthsElapsed: 0,
    numYearsElapsed: 0
};


class Clock {
    
    private AM: string = "am";
    private PM: string = "pm";

    private currentTime = 0; 
    private displayTime: boolean = false;

    constructor() {

    }

    toggleDisplayCurrentTime(val: boolean) {
        this.displayTime = val;
    }

    displayCurrentTime() {

        let am: string = "AM";
        let pm: string = "PM";

        if (this.displayTime) {
            if (TimeMeasurement.tick < 12) {
                console.log(TimeMeasurement.tick + am);
            } else {
                console.log(TimeMeasurement.tick + pm);
            }
            console.log(TimeMeasurement.tick);
        }
    }

    createTickInterval() {
        window.setInterval(this.tick, 1000);
    }

    tick() {

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
        console.log(TimeMeasurement.tick);
    }
}