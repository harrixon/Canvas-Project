let canvasReal = document.getElementById('canvas-real');
let contextReal = canvasReal.getContext('2d');
let canvasDraft = document.getElementById('canvas-draft');
let contextDraft = canvasDraft.getContext('2d');
let currentFunction;
let dragging = false;

$('#canvas-draft').mousedown(function(e){
    let mouseX = e.pageX - this.offsetLeft;
    let mouseY = e.pageY - this.offsetTop;
    currentFunction.onMouseDown([mouseX,mouseY],e);
    dragging = true;
});

$('#canvas-draft').mousemove(function(e){
    let mouseX = e.pageX - this.offsetLeft;
    let mouseY = e.pageY - this.offsetTop;
    if(dragging){
        currentFunction.onDragging([mouseX,mouseY],e);
    }
    currentFunction.onMouseMove([mouseX,mouseY],e);
});

$('#canvas-draft').mouseup(function(e){
    dragging = false;
    let mouseX = e.pageX - this.offsetLeft;
    let mouseY = e.pageY - this.offsetTop;
    currentFunction.onMouseUp([mouseX,mouseY],e);
});

$('#canvas-draft').mouseleave(function(e){
    dragging = false;
    let mouseX = e.pageX - this.offsetLeft;
    let mouseY = e.pageY - this.offsetTop;
    currentFunction.onMouseLeave([mouseX,mouseY],e);
});

$('#canvas-draft').mouseenter(function(e){
    let mouseX = e.pageX - this.offsetLeft;
    let mouseY = e.pageY - this.offsetTop;
    currentFunction.onMouseEnter([mouseX,mouseY],e);
});

// $('#canvas-draft').dblclick(function(e){
//     let mouseX = e.pageX - this.offsetLeft;
//     let mouseY = e.pageY - this.offsetTop;
//     currentFunction.onDoubleClick([mouseX,mouseY],e);
// });

class PaintFunction{
    constructor(){}
    onMouseDown(){}
    onDragging(){}
    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){console.log("mouse leave");}
    onMouseEnter(){}
    // onDoubleClick(){}
}


// global var
// functional
let hollow;                                     // depends on input, need check mechanism

// line
let lineWidth = 2;                              // 1.0 up
let lineJoin = "round";                         // "bevel" || "round" || "miter"

//color
// let paintColor = {r: 255, g: 255, b:255, a: 1};  // for drawing-paint.js
let background = "white";      // CSS style string
let strokeColor = "hsl(199, 50%,50%)";
let fillColor = "rgba(38, 255, 37, 0.5)";       // "rgba(128, 139, 255, 0)" = white, transparent

//font
var textAlign = "start";
var textBaseline = "bottom";
var fontSize = "48px";
var fontFamily = "Georgia";
var fontColor = "black";