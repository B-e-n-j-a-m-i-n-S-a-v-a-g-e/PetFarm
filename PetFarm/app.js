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
    stage.render(fuzzy, gpGrp, pen);
};
//# sourceMappingURL=app.js.map