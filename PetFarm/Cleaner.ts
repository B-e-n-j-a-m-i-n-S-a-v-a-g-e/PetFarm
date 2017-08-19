class Cleaner extends Employee {

    private totalPoopCleaned = 0;

    cleanSingleGuineaPig(gp: GuineaPig) {
        this.totalPoopCleaned += gp.getPoopAmount();
        gp.setPoopAmount(0);
    }

    cleanGuineaPigGroup(gpGroup: GuineaPigGroup) {

        //Iterates through group of pigs, removes their poop and sets their poop amount to 0.
        for (let i = 0; i < gpGroup.getNumGuineaPigs(); i++) {
            this.totalPoopCleaned += gpGroup.guineaPigs[i].getPoopAmount();
            gpGroup.guineaPigs[i].setPoopAmount(0)
            console.log(this.totalPoopCleaned);  
        }
    }

}