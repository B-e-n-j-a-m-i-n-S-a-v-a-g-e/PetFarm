

interface IGuineaPig {

    eat(quantity: number);
    move(direction: Direction);
    bweep(numSweeps: number);
    poop(quantity: number);
    getX();
    setX(x: number);
    getY();
    setY(x: number);
    getName();
    setName(name: string);
    getLength();
    getWidth();
    getSex();
    getColor();
    getHairLength();
    getCurrentDirection();
    setCurrentDirection(direction: Direction);
    getFoodCapacity();
    getFoodLevel();
    setFoodLevel(newLevel: number);
    getPoopAmount();
    setPoopAmount(amount: number);
    addSkill(skill: string);
    performSkill(skill: GuineaPigSkills);
    performAllSkills();
    mate(partner: GuineaPig);
    

}