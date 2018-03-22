class DrawingQuadraticCurve extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
        this.status = "start";              // 1. start -> end / 2. ref
        this.xm = 0;
        this.ym = 0;
    }
    
    onMouseDown(coord, event){
        // style
        this.contextDraft.lineWidth = lineWidth;
        this.contextDraft.strokeStyle = strokeColor;
        this.contextDraft.fillStyle = fillColor;
        this.contextReal.lineWidth = lineWidth;
        this.contextReal.strokeStyle = strokeColor;
        this.contextReal.fillStyle = fillColor;
        // get starting pt
        if (this.status == "start")
        {
            this.origX = coord[0];
            this.origY = coord[1];
        }
    }

    onDragging(coord, event){
        // print st line preview
        if (this.status == "start")
        {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.drawPreviewStLine(coord);
            // this.drawDraft(coord);
        }
    }

    onMouseUp(coord, event){
        if (this.status == "start")
        {
            // get end pt
            this.endX = coord[0];
            this.endY = coord[1];
            // this.status = "end";
            this.status = "ref";
        }
        else //if (this.status == "ref")
        {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.drawReal(coord);
            cPush();
        }
    }

    onMouseMove(coord, event){
    // preview quad curve
        if (this.status == "ref")
        {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.drawDraft(coord);
        }
    }
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
        // this.vertex = getQuadraticCurvePoint(this.origX, this.origY, );
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.origX, this.origY);
        this.contextReal.quadraticCurveTo(coord[0], coord[1], this.endX, this.endY);
        this.contextReal.stroke();
        this.status = "start";
    }

    drawPreviewStLine(coord){
        this.contextDraft.beginPath();
        this.contextDraft.setLineDash([5,10]);
        this.contextDraft.moveTo(this.origX, this.origY);
        this.contextDraft.lineTo(coord[0], coord[1]);
        this.contextDraft.closePath();
        this.contextDraft.stroke();
        this.contextDraft.setLineDash([]);
    }

    // getQuadraticCurvePoint(startX, startY, cpX, cpY, endX, endY, position) {
    //     return {
    //         x:  _getQBezierValue(position, startX, cpX, endX),
    //         y:  _getQBezierValue(position, startY, cpY, endY)
    //     };
    // }

    // _getQBezierValue(t, p1, p2, p3) {
    //     var iT = 1 - t;
    //     return iT * iT * p1 + 2 * iT * t * p2 + t * t * p3;
    // }
}
