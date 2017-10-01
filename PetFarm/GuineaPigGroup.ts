class GuineaPigGroup extends GameObject implements IGuineaPigGroup {

    guineaPigs: IGuineaPig[];
    private type: string = "GuineaPigGroup";

    constructor() {
        super();
        this.guineaPigs = [];
    }

    removeGP(gp: IGuineaPig) {

        let index = this.guineaPigs.indexOf(gp);
        
        if (index > -1) {
            this.guineaPigs.splice(index, 1);
        }
    }

    addGP(gp: IGuineaPig) {

        this.guineaPigs.push(gp);
    }

    addMultipleGP(first: IGuineaPig, ...last: IGuineaPig[]) {

        for (let i = 0; i < arguments.length; i++) {
            this.addGP(arguments[i]);
        }
    } 

    getNumGuineaPigs() {

        return this.guineaPigs.length;
    }

    moveGPToDifferentGroup(source: GuineaPig, target: IGuineaPigGroup) {

        this.removeGP(source);
        target.addGP(source);
    }
}