
window.onload = () => {

    let canvas = document.createElement('canvas');
    let context = canvas.getContext("2d");
    let body = document.getElementsByTagName("BODY")[0];
    body.appendChild(canvas);
    
    //Eventually a JSON parser will handle all this stuff and the app will be data-driven.

    let fuzzy = new GuineaPig("Fuzzy", Sex.male, Color.brown, HairLength.short, 20, 300, 100);
    let stinky = new GuineaPig("Stinky", Sex.male, Color.tan, HairLength.long, 20, 300, 300);
    let shirley = new GuineaPig("Herbert", Sex.female, Color.tan, HairLength.medium, 30, 100, 300);

    let gpg1 = new GuineaPigGroup();
    let gpg2 = new GuineaPigGroup();

    gpg1.addGP(fuzzy);
    gpg1.addGP(stinky);
    gpg2.addGP(shirley);

    fuzzy.poop(20);
    stinky.poop(30);

    let linda = new Cleaner("Linda", 30000, 400, 20);
    let marcy = new Accountant("Marcy", 100000, 400, 50);

    let bigBoss = new Manager("BigBoss", 200000000);


    let pen = new GuineaPigPen(10, 10, 400, 400, 10, "#fff");

    // By initializing the stage, a new game clock is set in motion
    let stage = new Stage(canvas, context, 500, 500);

    let gpGrp = new GuineaPigGroup();
    gpGrp.addMultipleGP(fuzzy, stinky, shirley);


    fuzzy.setCurrentDirection(Direction.west);
    stinky.setCurrentDirection(Direction.east);

    //stage.addChild(stinky);
    //stage.addChild(fuzzy);

    stage.addChild(gpGrp);
    stage.update();
};