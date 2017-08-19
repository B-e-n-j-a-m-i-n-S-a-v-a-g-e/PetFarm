﻿class Renderer {

    parent: HTMLElement;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    width: number;
    height: number;

    constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, width: number, height: number) {

        this.canvas = canvas;
        this.context = context;

        this.context.canvas.width = width;
        this.context.canvas.height = height;

        //this.context.fillRect(200, 200, 100, 100);
        //this.context.fill();

        canvas.style.backgroundColor = "grey";
    }

    clearCanvas() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
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
    renderGuineaPigPen(gpp: GuineaPigPen) {

        this.context.strokeStyle = gpp.getColor();
        this.context.lineWidth = gpp.getThickness();
        this.context.strokeRect(gpp.getX(), gpp.getY(), gpp.getWidth(), gpp.getHeight());
        this.context.stroke();
    }

    renderEmployee(employee: IEmployee) {

    }
}