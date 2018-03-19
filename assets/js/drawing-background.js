class DrawingBackground extends PaintFunction{
    constructor(contextReal){
        super();
        // this.contextBackground = contextBackground;
        this.contextReal = contextReal;
        this.setBackground();
    }
    
    setBackground(event){
        var img = new Image();
        img.src = "assets/img/background.png";
        img.width = 10;
        this.contextReal.drawImage(img, 0, 0);
    }

    // onMouseDown(){}
    // onDragging(){}
    // onMouseMove(){}
    // onMouseUp(){}
    // onMouseLeave(){}
    // onMouseEnter(){}
}

