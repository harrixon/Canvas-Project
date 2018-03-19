class DrawingRectangle extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
        //style
        this.contextDraft.lineWidth = lineWidth;
        this.contextDraft.strokeStyle = strokeColor;
        this.contextReal.lineWidth = lineWidth;
        this.contextReal.strokeStyle = strokeColor;
        this.contextDraft.fillStyle = fillColor;
        this.contextReal.fillStyle = fillColor;
    }
    
    onMouseDown(coord,event){
        console.log(hollow);
        this.origX = coord[0];
        this.origY = coord[1];
    }
    
    onDragging(coord,event){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.setLineDash([5,10]);
        let lenX = coord[0] - this.origX;
        let lenY = coord[1] - this.origY;
        if (event.shiftKey)
        {
            lenY = lenX;
        }
        if (hollow)
        {
            this.contextDraft.strokeRect(this.origX,this.origY, lenX, lenY);
        }
        else
        {
            this.contextDraft.fillRect(this.origX,this.origY, lenX, lenY);
        }
        this.contextDraft.setLineDash([]);
    }

    onMouseUp(coord, event){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        let lenX = coord[0] - this.origX;
        let lenY = coord[1] - this.origY;
        if (event.shiftKey)
        {
            lenY = lenX;
        }
        if (hollow)
        {
            this.contextReal.strokeRect(this.origX,this.origY, lenX, lenY);
        }
        else
        {
            this.contextReal.fillRect(this.origX,this.origY, lenX, lenY);
        }
    }

    onMouseMove(){}
    onMouseLeave(){}
    onMouseEnter(){}
}