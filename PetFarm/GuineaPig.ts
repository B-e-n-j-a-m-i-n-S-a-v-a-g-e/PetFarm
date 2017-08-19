﻿
enum Sex { "male", "female" };
enum HairLength { "short", "medium", "long" };
enum Color { "brown", "white", "black", "tan", "grey" };

class GuineaPig implements IGuineaPig {

    private name: string;
    private sex: Sex; 
    private color: Color;
    private hairLength: HairLength;
    private pos: Vector2D;
    private length: number = 20; 
    private width: number = 10;

    private skills: string[];

    private foodLevel: number = 4;
    private foodCapacity: number = 20;

    //You might be wondering why on Earth this exists. Needed because the cleaner will iterate through the poop 
    //generated by each pig and clean it.
    private poopAmount: number = 0;


    constructor(name: string, sex: Sex, color: Color, hairLength: HairLength, foodCapacity: number, x: number, y: number) {

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

    getName() {
        return this.name;
    }
    setName(name: string) {
        this.name = name;
    }
    getSex() {
        return this.sex;
    }
    getColor() {
        return this.color;
    }
    getHairLength() {
        return this.hairLength;
    }
    getFoodLevel() {
        return this.foodLevel;
    }
    setFoodLevel(newLevel: number) {
        this.foodLevel = newLevel;
    }
    getFoodCapacity() {
        return this.foodCapacity;
    }
    getX() {
        return this.pos.x;
    }
    setX(x: number) {
        this.pos.x = x;
    }
    getY() {
        return this.pos.y;
    }
    setY(y: number) {
        this.pos.y = y;
    }
    getLength() {
        return this.length;
    }
    getWidth() {
        return this.width;
    }

    getPoopAmount() {
        return this.poopAmount;
    }

    setPoopAmount(amount: number) {
        this.poopAmount = amount;
    }

    eat(quantity: number) {
        console.log(this.name + " has eaten " + quantity + " of food.");
        this.foodLevel += quantity;
    }

    //A guinea pig makes a BWEEP sound when it's hungry
    bweep(numBweeps: number) {
        for (let i = 0; i < numBweeps; i++) {
            console.log(this.name + " says " + "BWEEEEEEEEEEEEEEEEEEPPP!");
        }
    }

    poop(quantity: number) {

        let pigPronoun: string;

        if (this.getSex() === Sex.male) {
            pigPronoun = "his";
        } else {
            pigPronoun = "her";
        }

        if (this.foodLevel > 0) {
            this.foodLevel -= quantity;
            this.poopAmount += quantity;
        }
        else {
            console.log("Poor little " + this.name + " has no more food in " + pigPronoun + " belly.");
        }
    }

    addSkill(skill: string) {

        this.skills.push(skill);
    }

    performSkill(skill: GuineaPigSkills) {
        console.log(skill);

    }

    performAllSkills() {

        for (let i = 0; i < this.skills.length; i++) {
            console.log(this.skills[i]);    
        }
    }    

    mate(partner: GuineaPig) {

        let randomValue = Math.floor(Math.random() * 10);
        let sex: Sex;
        let hairLength: HairLength;
        let color: Color
        let foodCapacity: number;

        //Grabbing the first three letters of each parent's name + mashing them together to make baby's name.
        let name:string  = this.name.substring(0, 3) + partner.getName().substring(0, 3);


        //If < 5, pig will have attributes from "this" class
        if (randomValue < 5) {

            sex = partner.getSex();
            hairLength = partner.getHairLength();
            color = partner.getColor();
            foodCapacity = partner.getFoodCapacity();
        }
        //Else, pig will have attributes from mate's class 
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
    }
}