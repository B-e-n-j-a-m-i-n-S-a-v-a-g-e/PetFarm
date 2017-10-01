class GuineaPigPen extends GameObject {

    type: string = "GuineaPigPen";
    x: number;
    y: number;
    width: number;
    height: number;
    thickness: number;
    color: string;

    constructor(x: number, y: number, width: number, height: number, thickness: number, color: string) {
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.thickness = thickness;
        this.color = color;
    }

    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    getThickness() {
        return this.thickness;
    }
    getColor() {
        return this.color;
    }
}