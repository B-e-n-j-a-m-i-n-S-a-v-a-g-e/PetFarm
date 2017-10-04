/*
 * Guinea Pig Farm is an application which allows the user to
 * breed guinea pigs or various colors and hair lengths.
 *
 */


class GuineaPigFarm extends GameObject {

    trainer: Trainer;
    feeder: Feeder;
    cleaner: Cleaner;
    actionManager: ActionManager;

    guineaPig: GuineaPig;


    constructor() {
        super();
        this.init();
    }

    init() {

        //this.actionManager.performDailyActions();

    }
   
}