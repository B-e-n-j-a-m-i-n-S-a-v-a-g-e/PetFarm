
enum GuineaPigSkills {"PLAY_DEAD", "ROLL_OVER", "FETCH_STICK"};


class Trainer extends Employee {

    teachGuineaPigSkill(gp: GuineaPig, skill: GuineaPigSkills) {

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
    }
}