var Stage = (function () {
    function Stage(canvas, context, width, height) {
        this.guineaPigs = [];
        this.guineaPigGroups = [];
        this.guineaPigPens = [];
        this.canvas = canvas;
        this.context = context;
        this.context.canvas.width = width;
        this.context.canvas.height = height;
        canvas.style.backgroundColor = "grey";
        //By instantiating Stage, a new clock is instantiated and the main loop is called
        this.clock = new Clock();
        this.clock.createTickInterval(this);
    }
    Stage.prototype.clearStage = function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    Stage.prototype.addChild = function (go) {
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
    };
    Stage.prototype.update = function () {
        this.moveGuineaPigs();
        this.moveGuineaPigGroups();
        this.clearStage();
        for (var i = 0; i < this.guineaPigs.length; i++) {
            this.render(this.guineaPigs[i]);
        }
        for (var j = 0; j < this.guineaPigGroups.length; j++) {
            this.render(undefined, this.guineaPigGroups[j]);
        }
        /* for (let k: number = 0; k < this.renderGuineaPigPen.length; k++) {
            this.render(undefined, undefined, this.guineaPigPens[k]);
        } */
    };
    //TODO: Ugly as hell. Params need to be refactored.
    Stage.prototype.render = function (gp, gpg, pen) {
        if (this.guineaPigs.length > 0) {
            this.renderGuineaPig(gp);
        }
        if (this.guineaPigGroups.length > 0) {
            this.renderGuineaPigGroup(gpg);
        }
        //this.renderGuineaPigPen(pen);
    };
    Stage.prototype.moveGuineaPigs = function () {
        for (var i = 0; i < this.guineaPigs.length; i++) {
            this.guineaPigs[i].move(this.guineaPigs[i].getCurrentDirection());
        }
    };
    Stage.prototype.moveGuineaPigGroups = function () {
        for (var i = 0; i < this.guineaPigGroups.length; i++) {
            for (var j = 0; j < this.guineaPigGroups[i].guineaPigs.length; j++) {
                this.guineaPigGroups[i].guineaPigs[j].move(this.guineaPigGroups[i].guineaPigs[j].getCurrentDirection());
            }
        }
    };
    Stage.prototype.renderGuineaPig = function (gp) {
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
    };
    Stage.prototype.renderGuineaPigGroup = function (gpg) {
        for (var i = 0; i < gpg.getNumGuineaPigs(); i++) {
            this.renderGuineaPig(gpg.guineaPigs[i]);
        }
    };
    Stage.prototype.renderGuineaPigPen = function (gpp) {
        this.context.strokeStyle = gpp.getColor();
        this.context.lineWidth = gpp.getThickness();
        this.context.strokeRect(gpp.getX(), gpp.getY(), gpp.getWidth(), gpp.getHeight());
        this.context.stroke();
    };
    Stage.prototype.renderEmployee = function (employee) {
        //TODO
    };
    return Stage;
})();
//# sourceMappingURL=Stage.js.map