class GuineaPigPoop extends GameObject {

    private x: number;
    private y: number;
    private size: number = 5;

    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }
}