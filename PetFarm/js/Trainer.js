var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
