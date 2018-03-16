class DrawingPolygon extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;    
        this.contextDraft = contextDraft;
        this.start = true;
    }
    
    onMouseDown(coord, event){
        // style
        this.contextDraft.strokeStyle = "#df4b26";
        this.contextDraft.lineJoin = "round";
        this.contextDraft.lineWidth = 5;
        this.contextReal.strokeStyle = "#df4b26";
        this.contextReal.lineJoin = "round";
        this.contextReal.lineWidth = 5;
        // starting pt
        if (this.start)
        {
            this.origX = coord[0];
            this.origY = coord[1];
            this.start = false;
        }
    }

    onDragging(){}

    onMouseMove(coord, event){
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.drawDraft(coord[0], coord[1]);  
    }

    onMouseUp(coord, event){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        // draw real
        this.drawReal(coord[0], coord[1]);
        // prepare for next line
        this.drawDraft(coord[0], coord[1]);
        this.origX = coord[0];
        this.origY = coord[1];
    }

    onMouseLeave(coord, event){
        console.log(coord[0],coord[1]);
        if (coord[0] < -10 || coord[1] < -10 || coord[0] > canvasDraft.width + 10 || coord[1] > canvasDraft.height +10)
        {
            // this.start = true;
            this.contextDraft.clearRect(0,0,canvasDraft.width, canvasDraft.height);
            // this.contextDraft.closePath();
        }
    }
    onMouseEnter(){}

    drawDraft(x,y){
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX, this.origY);
        this.contextDraft.lineTo(x, y);
        this.contextDraft.closePath();
        this.contextDraft.stroke();      
    }

    drawReal(x,y){
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.origX, this.origY);
        this.contextReal.lineTo(x, y);
        this.contextReal.closePath();
        this.contextReal.stroke();
    }
}