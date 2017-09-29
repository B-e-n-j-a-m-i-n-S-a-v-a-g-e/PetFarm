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

    private guineaPigMoveDirection: Direction;

    constructor() {}

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

    createTickInterval(ctx:Stage) {
        window.setInterval(this.tick, 1000, ctx);
    }

    //Main update loop for game. Owned by Stage.
    tick(ctx: Stage) {

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
    }
}