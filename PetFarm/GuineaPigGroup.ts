﻿class GuineaPigGroup {

    guineaPigs: GuineaPig[];


    constructor() {

        this.guineaPigs = [];
    }

    removeGP(gp: GuineaPig) {

        let index = this.guineaPigs.indexOf(gp);
        
        if (index > -1) {
            this.guineaPigs.splice(index, 1);
        }
    }

    addGP(gp: GuineaPig) {

        this.guineaPigs.push(gp);
    }

    addMultipleGP(first: GuineaPig, ...last: GuineaPig[]) {

        for (let i = 0; i < arguments.length; i++) {
            this.addGP(arguments[i]);
        }
    } 

    getNumGuineaPigs() {

        return this.guineaPigs.length;
    }

    moveGPToDifferentGroup(source: GuineaPig, target: GuineaPigGroup) {

        this.removeGP(source);
        target.addGP(source);
    }
}