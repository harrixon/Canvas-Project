class DrawingQuadraticCurve extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
        this.status = "start";              // start / end / ref
        // style
        this.contextDraft.lineWidth = lineWidth;
        this.contextDraft.strokeStyle = strokeColor;
        this.contextDraft.fillStyle = fillColor;
        this.contextReal.lineWidth = lineWidth;
        this.contextReal.strokeStyle = strokeColor;
        this.contextReal.fillStyle = fillColor;
    }

    onMouseDown(coord, event){
        // starting pt
        if (this.status == "start")
        {
            this.origX = coord[0];
            this.origY = coord[1];
        }
        else if (this.status == "end")
        {
            this.endX = coord[0];
            this.endY = coord[1];
        }
    }

    onDragging(coord, event){
        if (this.status == "ref")
        {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.drawDraft(coord);
        }
    }

    onMouseUp(coord, event){
        if (this.status == "start")
        {
            this.status = "end";
        }
        else if (this.status == "end")
        {
            this.status = "ref";
        }
        else if (this.status == "ref")
        {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.drawReal(coord);
            cPush();
        }
    }

    // onMouseMove(){}
    // onMouseLeave(){}
    // onMouseEnter(){}

    drawDraft(coord){
        this.contextDraft.beginPath();
        this.contextDraft.setLineDash([5,10]);
        this.contextDraft.moveTo(this.origX, this.origY);
        this.contextDraft.quadraticCurveTo(coord[0], coord[1], this.endX, this.endY);
        this.contextDraft.stroke();
        this.contextDraft.setLineDash([]);
    }

    drawReal(coord){
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.origX, this.origY);
        this.contextReal.quadraticCurveTo(coord[0], coord[1], this.endX, this.endY);
        this.contextReal.stroke();
        this.status = "start";
    }
}