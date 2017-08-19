class Feeder extends Employee {

    totalAmountOfFoodUsed: number = 0;

    feedingQuantity: number = 20;

    getFeedingQuantity() {
        return this.feedingQuantity;
    }

    setFeedingQuantity(quantity: number) {
        this.feedingQuantity = quantity;
    }

    feedSingleGuineaPig(gp: GuineaPig, amount: number) {

        gp.setFoodLevel(gp.getFoodLevel() + amount);
    }

    feedMultipleGuineaPigs(gpGroup: GuineaPigGroup, amount: number) {

        //Iterate through group of pigs & feeds them. Adds amount to totalAmountOfFoodUsed
        for (let i = 0; i < gpGroup.getNumGuineaPigs(); i++) {
            gpGroup.guineaPigs[i].setFoodLevel(gpGroup.guineaPigs[i].getFoodLevel() + this.feedingQuantity);
            this.totalAmountOfFoodUsed += this.feedingQuantity;
        }
    }
}