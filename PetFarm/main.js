var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Accountant = (function (_super) {
    __extends(Accountant, _super);
    function Accountant() {
        _super.apply(this, arguments);
    }
    Accountant.prototype.payPaycheck = function (receiver) {
        //Let's pretend this is a perfect world without taxes.
        var paycheck = Number(receiver.getSalary()) / 12;
        if (receiver.getIsFormallyHired()) {
            receiver.setCurrentMoney(Number(receiver.getCurrentMoney()) + paycheck);
        }
    };
    Accountant.prototype.payManagerPaycheck = function (receiver) {
        var paycheck = Number(receiver.getSalary()) / 12;
        receiver.setCurrentMoney(Number(receiver.getCurrentMoney()) + paycheck);
    };
    return Accountant;
})(Employee);
var ActionManager = (function () {
    function ActionManager() {
    }
    ActionManager.prototype.performDailyActions = function (cleaner) {
        /*   switch (TimeMeasurement.tick) {
   
               case 8:
                   //Cleaner cleans poop from the guinea pig groups
                   console.log("Cleaner cleans poop.");
                   break;
               case 9:
                   //Something else
                   console.log("Guinea Pigs sleep.");
                   break;
               case 10:
                   console.log("Guinea pigs eat.");
                   break;
               case 14:
                   console.log("Something else...");
                   break;
           }
           */
    };
    return ActionManager;
})();
window.onload = function () {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext("2d");
    var body = document.getElementsByTagName("BODY")[0];
    body.appendChild(canvas);
    //Eventually a JSON parser will handle all this stuff and the app will be data-driven.
    var fuzzy = new GuineaPig("Fuzzy", Sex.male, Color.brown, HairLength.short, 20, 300, 100);
    var stinky = new GuineaPig("Stinky", Sex.male, Color.tan, HairLength.long, 20, 300, 300);
    var shirley = new GuineaPig("Herbert", Sex.female, Color.tan, HairLength.medium, 30, 100, 300);
    var gpg1 = new GuineaPigGroup();
    var gpg2 = new GuineaPigGroup();
    gpg1.addGP(fuzzy);
    gpg1.addGP(stinky);
    gpg2.addGP(shirley);
    fuzzy.poop(20);
    stinky.poop(30);
    var linda = new Cleaner("Linda", 30000, 400, 20);
    var marcy = new Accountant("Marcy", 100000, 400, 50);
    var bigBoss = new Manager("BigBoss", 200000000);
    var pen = new GuineaPigPen(10, 10, 400, 400, 10, "#fff");
    // By initializing the stage, a new game clock is set in motion
    var stage = new Stage(canvas, context, 500, 500);
    var gpGrp = new GuineaPigGroup();
    gpGrp.addMultipleGP(fuzzy, stinky, shirley);
    fuzzy.setCurrentDirection(Direction.west);
    stinky.setCurrentDirection(Direction.east);
    //stage.addChild(stinky);
    //stage.addChild(fuzzy);
    stage.addChild(gpGrp);
    stage.update();
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
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(name, salary, x, y) {
        _super.call(this);
        this.name = name;
        this.salary = salary;
        this.isFormallyHired = false;
        //Current money initialized to zero. Easier for the simulation if employees live paycheck to paycheck.
        this.currentMoney = 0;
    }
    Employee.prototype.getCurrentMoney = function () {
        return this.currentMoney;
    };
    Employee.prototype.setCurrentMoney = function (money) {
        this.currentMoney = money;
    };
    Employee.prototype.getName = function () {
        return this.name;
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.setSalary = function (newSalary) {
        this.salary = newSalary;
    };
    Employee.prototype.getIsFormallyHired = function () {
        return this.isFormallyHired;
    };
    Employee.prototype.setIsFormallyHired = function (isHired) {
        this.isFormallyHired = isHired;
    };
    return Employee;
})(GameObject);
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
var Sex;
(function (Sex) {
    Sex[Sex["male"] = 0] = "male";
    Sex[Sex["female"] = 1] = "female";
})(Sex || (Sex = {}));
;
var HairLength;
(function (HairLength) {
    HairLength[HairLength["short"] = 0] = "short";
    HairLength[HairLength["medium"] = 1] = "medium";
    HairLength[HairLength["long"] = 2] = "long";
})(HairLength || (HairLength = {}));
;
var Color;
(function (Color) {
    Color[Color["brown"] = 0] = "brown";
    Color[Color["white"] = 1] = "white";
    Color[Color["black"] = 2] = "black";
    Color[Color["tan"] = 3] = "tan";
    Color[Color["grey"] = 4] = "grey";
})(Color || (Color = {}));
;
var Direction;
(function (Direction) {
    Direction[Direction["north"] = 0] = "north";
    Direction[Direction["south"] = 1] = "south";
    Direction[Direction["east"] = 2] = "east";
    Direction[Direction["west"] = 3] = "west";
})(Direction || (Direction = {}));
;
var GuineaPig = (function (_super) {
    __extends(GuineaPig, _super);
    function GuineaPig(name, sex, color, hairLength, foodCapacity, x, y) {
        _super.call(this);
        this.type = "GuineaPig";
        this.length = 20;
        this.width = 10;
        this.foodLevel = 4;
        this.foodCapacity = 20;
        //You might be wondering why on Earth this exists. Needed because the cleaner will iterate through the poop 
        //generated by each pig and clean it.
        this.poopAmount = 0;
        this.currentDirection = Direction.north;
        this.pos = new Vector2D(x, y);
        this.name = name;
        this.sex = sex;
        this.color = color;
        this.hairLength = hairLength;
        this.foodCapacity = foodCapacity;
        this.pos.setX(x);
        this.pos.setY(y);
        this.skills = [];
    }
    GuineaPig.prototype.getName = function () {
        return this.name;
    };
    GuineaPig.prototype.setName = function (name) {
        this.name = name;
    };
    GuineaPig.prototype.getSex = function () {
        return this.sex;
    };
    GuineaPig.prototype.getColor = function () {
        return this.color;
    };
    GuineaPig.prototype.getHairLength = function () {
        return this.hairLength;
    };
    GuineaPig.prototype.getFoodLevel = function () {
        return this.foodLevel;
    };
    GuineaPig.prototype.setFoodLevel = function (newLevel) {
        this.foodLevel = newLevel;
    };
    GuineaPig.prototype.getFoodCapacity = function () {
        return this.foodCapacity;
    };
    GuineaPig.prototype.getX = function () {
        return this.pos.x;
    };
    GuineaPig.prototype.setX = function (x) {
        this.pos.x = x;
    };
    GuineaPig.prototype.getY = function () {
        return this.pos.y;
    };
    GuineaPig.prototype.setY = function (y) {
        this.pos.y = y;
    };
    GuineaPig.prototype.getLength = function () {
        return this.length;
    };
    GuineaPig.prototype.getWidth = function () {
        return this.width;
    };
    GuineaPig.prototype.getPoopAmount = function () {
        return this.poopAmount;
    };
    GuineaPig.prototype.setPoopAmount = function (amount) {
        this.poopAmount = amount;
    };
    GuineaPig.prototype.getCurrentDirection = function () {
        return this.currentDirection;
    };
    GuineaPig.prototype.setCurrentDirection = function (direction) {
        this.currentDirection = direction;
    };
    GuineaPig.prototype.move = function (direction) {
        switch (direction) {
            case Direction.north:
                this.pos.y -= 1;
                break;
            case Direction.south:
                this.pos.y += 1;
                break;
            case Direction.east:
                this.pos.x += 1;
                break;
            case Direction.west:
                this.pos.x -= 1;
                break;
            default:
                throw new Error("Direction not found");
        }
    };
    GuineaPig.prototype.eat = function (quantity) {
        console.log(this.name + " has eaten " + quantity + " of food.");
        this.foodLevel += quantity;
    };
    //A guinea pig makes a BWEEP sound when it's hungry
    GuineaPig.prototype.bweep = function (numBweeps) {
        for (var i = 0; i < numBweeps; i++) {
            console.log(this.name + " says " + "BWEEEEEEEEEEEEEEEEEEPPP!");
        }
    };
    GuineaPig.prototype.poop = function (quantity) {
        var pigPronoun;
        if (this.getSex() === Sex.male) {
            pigPronoun = "his";
        }
        else {
            pigPronoun = "her";
        }
        if (this.foodLevel > 0) {
            this.foodLevel -= quantity;
            this.poopAmount += quantity;
        }
        else {
            console.log("Poor little " + this.name + " has no more food in " + pigPronoun + " belly.");
        }
    };
    GuineaPig.prototype.addSkill = function (skill) {
        this.skills.push(skill);
    };
    GuineaPig.prototype.performSkill = function (skill) {
        console.log(skill);
    };
    GuineaPig.prototype.performAllSkills = function () {
        for (var i = 0; i < this.skills.length; i++) {
            console.log(this.skills[i]);
        }
    };
    GuineaPig.prototype.mate = function (partner) {
        var randomValue = Math.floor(Math.random() * 10);
        var sex;
        var hairLength;
        var color;
        var foodCapacity;
        //Grabbing the first three letters of each parent's name + mashing them together to make baby's name.
        var name = this.name.substring(0, 3) + partner.getName().substring(0, 3);
        //If < 5, pig will have attributes from "this" class
        if (randomValue < 5) {
            sex = partner.getSex();
            hairLength = partner.getHairLength();
            color = partner.getColor();
            foodCapacity = partner.getFoodCapacity();
        }
        else {
            sex = this.getSex();
            hairLength = this.getHairLength();
            color = this.getColor();
            foodCapacity = this.getFoodCapacity();
        }
        //Making sure we are able to reproduce.
        if (partner.getSex() !== this.sex) {
            return new GuineaPig(name, sex, color, hairLength, foodCapacity, this.pos.x, this.pos.y);
        }
    };
    return GuineaPig;
})(GameObject);
/*
 * Guinea Pig Farm is an application which allows the user to
 * breed guinea pigs or various colors and hair lengths.
 *
 */
var GuineaPigFarm = (function (_super) {
    __extends(GuineaPigFarm, _super);
    function GuineaPigFarm() {
        _super.call(this);
        this.init();
    }
    GuineaPigFarm.prototype.init = function () {
        // this.actionManager.performDailyActions();
    };
    return GuineaPigFarm;
})(GameObject);
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
var GuineaPigPen = (function (_super) {
    __extends(GuineaPigPen, _super);
    function GuineaPigPen(x, y, width, height, thickness, color) {
        _super.call(this);
        this.type = "GuineaPigPen";
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
})(GameObject);
var IEmployee = (function () {
    function IEmployee() {
    }
    IEmployee.prototype.getName = function () { };
    ;
    IEmployee.prototype.getSalary = function () { };
    ;
    IEmployee.prototype.getCurrentMoney = function () { };
    ;
    IEmployee.prototype.setCurrentMoney = function (money) { };
    ;
    IEmployee.prototype.setSalary = function (newSalary) { };
    ;
    IEmployee.prototype.getIsFormallyHired = function () { };
    ;
    IEmployee.prototype.setIsFormallyHired = function (isHired) { };
    ;
    return IEmployee;
})();
var Manager = (function () {
    function Manager(name, salary) {
        this.managedEmployees = [];
        this.name = name;
        this.salary = salary;
        this.currentMoney = 0;
    }
    Manager.prototype.getName = function () {
        return this.name;
    };
    Manager.prototype.getSalary = function () {
        return this.salary;
    };
    Manager.prototype.setSalary = function (newSalary) {
        this.salary = newSalary;
    };
    Manager.prototype.getCurrentMoney = function () {
        return this.currentMoney;
    };
    Manager.prototype.setCurrentMoney = function (money) {
        this.currentMoney = money;
    };
    Manager.prototype.addEmployee = function (employee) {
        this.managedEmployees.push(employee);
    };
    Manager.prototype.removeEmployee = function (employee) {
        var index = this.managedEmployees.indexOf(employee);
        if (index > -1) {
            this.managedEmployees.splice(index, 1);
        }
    };
    Manager.prototype.getNumManagedEmployees = function () {
        return this.managedEmployees.length;
    };
    Manager.prototype.fireEmployee = function (employee) {
        this.removeEmployee(employee);
        employee.setIsFormallyHired(false);
        employee = null;
    };
    Manager.prototype.hireEmployee = function (employee) {
        this.addEmployee(employee);
        employee.setIsFormallyHired(true);
    };
    return Manager;
})();
var Stage = (function () {
    function Stage(canvas, context, width, height) {
        this.guineaPigs = [];
        this.guineaPigGroups = [];
        this.guineaPigPens = [];
        this.canvas = canvas;
        this.context = context;
        this.context.canvas.width = width;
        this.context.canvas.height = height;
        canvas.style.backgroundColor = "grey";
        //By instantiating Stage, a new clock is instantiated and the main loop is called
        this.clock = new Clock();
        this.clock.createTickInterval(this);
    }
    Stage.prototype.clearStage = function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    Stage.prototype.addChild = function (go) {
        switch (go.type) {
            case "GuineaPig":
                this.guineaPigs.push(go);
                break;
            case "GuineaPigGroup":
                this.guineaPigGroups.push(go);
                break;
            case "GuineaPigPen":
                this.guineaPigPens.push(go);
                break;
        }
        console.log(this.guineaPigGroups);
    };
    Stage.prototype.update = function () {
        this.moveGuineaPigs();
        this.moveGuineaPigGroups();
        this.clearStage();
        for (var i = 0; i < this.guineaPigs.length; i++) {
            this.render(this.guineaPigs[i]);
        }
        for (var j = 0; j < this.guineaPigGroups.length; j++) {
            this.render(undefined, this.guineaPigGroups[j]);
        }
        /* for (let k: number = 0; k < this.renderGuineaPigPen.length; k++) {
            this.render(undefined, undefined, this.guineaPigPens[k]);
        } */
    };
    //TODO: Ugly as hell. Params need to be refactored.
    Stage.prototype.render = function (gp, gpg, pen) {
        if (this.guineaPigs.length > 0) {
            this.renderGuineaPig(gp);
        }
        if (this.guineaPigGroups.length > 0) {
            this.renderGuineaPigGroup(gpg);
        }
        //this.renderGuineaPigPen(pen);
    };
    Stage.prototype.moveGuineaPigs = function () {
        for (var i = 0; i < this.guineaPigs.length; i++) {
            this.guineaPigs[i].move(this.guineaPigs[i].getCurrentDirection());
        }
    };
    Stage.prototype.moveGuineaPigGroups = function () {
        for (var i = 0; i < this.guineaPigGroups.length; i++) {
            for (var j = 0; j < this.guineaPigGroups[i].guineaPigs.length; j++) {
                this.guineaPigGroups[i].guineaPigs[j].move(this.guineaPigGroups[i].guineaPigs[j].getCurrentDirection());
            }
        }
    };
    Stage.prototype.renderGuineaPig = function (gp) {
        this.context.save();
        console.log(gp);
        switch (gp.getColor()) {
            case 0:
                this.context.fillStyle = "brown";
                break;
            case 1:
                this.context.fillStyle = "white";
                break;
            case 2:
                this.context.fillStyle = "black";
                break;
            case 4:
                this.context.fillStyle = "#D2B48C";
                break;
            case 5:
                this.context.fillStyle = "grey";
                break;
        }
        this.context.fillStyle = "'" + gp.getColor() + "'";
        this.context.fillRect(gp.getX(), gp.getY(), gp.getWidth(), gp.getLength());
        this.context.fill();
        this.context.restore();
    };
    Stage.prototype.renderGuineaPigGroup = function (gpg) {
        for (var i = 0; i < gpg.getNumGuineaPigs(); i++) {
            this.renderGuineaPig(gpg.guineaPigs[i]);
        }
    };
    Stage.prototype.renderGuineaPigPen = function (gpp) {
        this.context.strokeStyle = gpp.getColor();
        this.context.lineWidth = gpp.getThickness();
        this.context.strokeRect(gpp.getX(), gpp.getY(), gpp.getWidth(), gpp.getHeight());
        this.context.stroke();
    };
    Stage.prototype.renderEmployee = function (employee) {
        //TODO
    };
    return Stage;
})();
var GuineaPigSkills;
(function (GuineaPigSkills) {
    GuineaPigSkills[GuineaPigSkills["PLAY_DEAD"] = 0] = "PLAY_DEAD";
    GuineaPigSkills[GuineaPigSkills["ROLL_OVER"] = 1] = "ROLL_OVER";
    GuineaPigSkills[GuineaPigSkills["FETCH_STICK"] = 2] = "FETCH_STICK";
})(GuineaPigSkills || (GuineaPigSkills = {}));
;
var Trainer = (function (_super) {
    __extends(Trainer, _super);
    function Trainer() {
        _super.apply(this, arguments);
    }
    Trainer.prototype.teachGuineaPigSkill = function (gp, skill) {
        switch (skill) {
            case GuineaPigSkills.PLAY_DEAD:
                gp.addSkill(gp.getName() + " performs the " + "PLAY DEAD stunt");
                break;
            case GuineaPigSkills.ROLL_OVER:
                gp.addSkill(gp.getName() + " performs the " + "ROLL OVER stunt");
                break;
            case GuineaPigSkills.FETCH_STICK:
                gp.addSkill(gp.getName() + " performs the " + "FETCH STICK stunt");
                break;
        }
    };
    return Trainer;
})(Employee);
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
