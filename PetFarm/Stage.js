var Stage = (function () {
    function Stage(canvas, context, width, height) {
        this.guineaPigs = [];
        this.canvas = canvas;
        this.context = context;
        this.context.canvas.width = width;
        this.context.canvas.height = height;
        canvas.style.backgroundColor = "grey";
    }
    Stage.prototype.clearStage = function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    Stage.prototype.render = function (gp, gpg, pen) {
        this.renderGuineaPig(gp);
        this.renderGuineaPigGroup(gpg);
        this.renderGuineaPigPen(pen);
    };
    Stage.prototype.renderGuineaPig = function (gp) {
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
    };
    Stage.prototype.renderGuineaPigGroup = function (gpg) {
        for (var i = 0; i < gpg.getNumGuineaPigs(); i++) {
            this.renderGuineaPig(gpg[i]);
        }
    };
    Stage.prototype.renderGuineaPigPen = function (gpp) {
        this.context.strokeStyle = gpp.getColor();
        this.context.lineWidth = gpp.getThickness();
        this.context.strokeRect(gpp.getX(), gpp.getY(), gpp.getWidth(), gpp.getHeight());
        this.context.stroke();
    };
    Stage.prototype.renderEmployee = function (employee) {
    };
    return Stage;
})();
//# sourceMappingURL=Stage.js.map