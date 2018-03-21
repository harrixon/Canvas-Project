class DrawingEyeDropper extends PaintFunction{
    constructor(contextReal){
        super();
        this.contextReal = contextReal;
    }

    onMouseUp(coord, event){
        var data = contextReal.getImageData(coord[0], coord[1], 1, 1).data;
        // rgba(r, g, b, 255);
        var color = `rgba( ${data[0]}, ${data[1]}, ${data[2]}, 255)`;
        fillColor = color;
        strokeColor = color;
        // console.log(color);
        // console.log(fillColor);
        // console.log(strokeColor);
    }
    // onMouseDown(){}
    // onDragging(){}
    // onMouseMove(){}
    // onMouseLeave(){}
    // onMouseEnter(){}
}