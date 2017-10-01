class Stage {

    parent: HTMLElement;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    width: number;
    height: number;
    clock: Clock;

    private guineaPigs: IGuineaPig[] = [];
    private guineaPigGroups: GuineaPigGroup[] = [];
    private guineaPigPens: GuineaPigPen[] = [];

    constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, width: number, height: number) {

            this.canvas = canvas;
            this.context = context;

            this.context.canvas.width = width;
            this.context.canvas.height = height;

            canvas.style.backgroundColor = "grey";

            //By instantiating Stage, a new clock is instantiated and the main loop is called
            this.clock = new Clock();
            this.clock.createTickInterval(this);
    }

    clearStage() {

        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    addChild(go: any) {

        switch (go.type) {

            case "GuineaPig":
            this.guineaPigs.push(go);
            break;

            case "GuineaPigGroup":
            this.guineaPigGroups.push(go);
            break;

            case "GuineaPigPen":
            this.guineaPigPens.push(go);
            break;
        }
        console.log(this.guineaPigGroups);
    }

    update() {

        this.moveGuineaPigs();
        this.moveGuineaPigGroups();
        this.clearStage();

        for (let i: number = 0; i < this.guineaPigs.length; i++) {
            this.render(this.guineaPigs[i]);
        }
        for (let j: number = 0; j < this.guineaPigGroups.length; j++) {
            this.render(undefined,this.guineaPigGroups[j]);
        }
        /* for (let k: number = 0; k < this.renderGuineaPigPen.length; k++) {
            this.render(undefined, undefined, this.guineaPigPens[k]);
        } */

    }


    //TODO: Ugly as hell. Params need to be refactored.
    render(gp?: IGuineaPig, gpg?: GuineaPigGroup, pen?: GuineaPigPen) {

        if (this.guineaPigs.length > 0) {
            this.renderGuineaPig(gp);
        }
        if (this.guineaPigGroups.length > 0) {
            this.renderGuineaPigGroup(gpg);
        }
        //this.renderGuineaPigPen(pen);
    }

    moveGuineaPigs() {

        for (let i: number = 0; i < this.guineaPigs.length; i++) {
            this.guineaPigs[i].move(this.guineaPigs[i].getCurrentDirection());
        }
    }

    moveGuineaPigGroups() {

        for (let i: number = 0; i < this.guineaPigGroups.length; i++) {
            for (let j: number = 0; j < this.guineaPigGroups[i].guineaPigs.length; j++) {
                this.guineaPigGroups[i].guineaPigs[j].move(this.guineaPigGroups[i].guineaPigs[j].getCurrentDirection());
            }    
        }
    }

    renderGuineaPig(gp: IGuineaPig) {

        this.context.save();
        console.log(gp);
        switch (gp.getColor()) {

            case 0:
                this.context.fillStyle = "brown";
                break;
            case 1:
                this.context.fillStyle = "white";
                break;
            case 2:
                this.context.fillStyle = "black";
                break;
            case 4:
                this.context.fillStyle = "#D2B48C";
                break;
            case 5:
                this.context.fillStyle = "grey";
                break;

        }
        this.context.fillStyle = "'" + gp.getColor() + "'";
        this.context.fillRect(gp.getX(), gp.getY(), gp.getWidth(), gp.getLength());
        this.context.fill();
        this.context.restore();
    }

    renderGuineaPigGroup(gpg: GuineaPigGroup) {
        for (let i = 0; i < gpg.getNumGuineaPigs(); i++) {
            this.renderGuineaPig(gpg.guineaPigs[i]);
        }
    }

    renderGuineaPigPen(gpp: GuineaPigPen) {

        this.context.strokeStyle = gpp.getColor();
        this.context.lineWidth = gpp.getThickness();
        this.context.strokeRect(gpp.getX(), gpp.getY(), gpp.getWidth(), gpp.getHeight());
        this.context.stroke();
    }

    renderEmployee(employee: IEmployee) {
        //TODO
    }
}