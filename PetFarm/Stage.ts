class Stage {

    parent: HTMLElement;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    width: number;
    height: number;
    clock: Clock;

    private guineaPigs: IGuineaPig[] = [];

    constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, width: number, height: number) {

            this.canvas = canvas;
            this.context = context;

            this.context.canvas.width = width;
            this.context.canvas.height = height;

            canvas.style.backgroundColor = "grey";

            this.clock = new Clock();
            this.clock.createTickInterval();
    }

    clearStage() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    update() {

    }

    render(gp: IGuineaPig, gpg?: GuineaPigGroup, pen?: GuineaPigPen) {

            this.renderGuineaPig(gp);
            this.renderGuineaPigGroup(gpg);
            this.renderGuineaPigPen(pen);
    }

    renderGuineaPig(gp: IGuineaPig) {
        console.log("GUINEA PIG BEING RENDERED");
        this.context.save();
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
            this.renderGuineaPig(gpg[i]);
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