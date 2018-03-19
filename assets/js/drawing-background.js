// class DrawingBackground extends PaintFunction{
//     constructor(contextReal){
//         super();
//         // this.contextBackground = contextBackground;
//         this.contextReal = contextReal;
//         this.setBackground();
//     }

    // onMouseDown(){}
    // onDragging(){}
    // onMouseMove(){}
    // onMouseUp(){}
    // onMouseLeave(){}
    // onMouseEnter(){}
// }
    
function setBackground(){
    var img = new Image();
    img.src = "assets/img/gate.jpg";
    img.onload = function(){
        var w = canvasReal.width;
        var h = img.height / (img.width / w);
        if (h > canvasReal.height)
        {
            h = canvasReal.height;
            w = img.width / (img.height / h);
        }
        // console.log(w, h);
        contextReal.drawImage(img, 0, 0, w, h);
    }
    cPush();
}

