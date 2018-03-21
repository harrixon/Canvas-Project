$(document).ready(()=>{
    currentFunction = new DrawingPencil(contextReal,contextDraft);
});
$('#drawing-rectangle').click(()=>{
    hollow = false;     // to be set by fillcolor
    currentFunction = new DrawingRectangle(contextReal,contextDraft);
});
$('#drawing-rectangle-hollow').click(()=>{
    hollow = true;      // to be set by fillcolor
    currentFunction = new DrawingRectangle(contextReal,contextDraft);
});
$('#drawing-quadratic-curve').click(()=>{
    currentFunction = new DrawingQuadraticCurve(contextReal,contextDraft);
});
$('#drawing-circle').click(()=>{
    hollow = false;     // to be set by fillcolor
    currentFunction = new DrawingCircle(contextReal,contextDraft);
});
$('#drawing-circle-hollow').click(()=>{
    hollow = true;      // to be set by fillcolor
    currentFunction = new DrawingCircle(contextReal,contextDraft);
});
$('#drawing-ellipse').click(()=>{
    currentFunction = new DrawingEllipse(contextReal,contextDraft);
});
$('#drawing-line').click(()=>{
    currentFunction = new DrawingLine(contextReal,contextDraft);
});
$('#drawing-polygon').click(()=>{
    currentFunction = new DrawingPolygon(contextReal,contextDraft);
});
$('#drawing-pencil').click(()=>{
    currentFunction = new DrawingPencil(contextReal,contextDraft);
});
$('#drawing-pencil-rotating-strokes').click(()=>{
    currentFunction = new DrawingPencilRotatingStrokes(contextReal,contextDraft);
});
$('#drawing-font').click(()=>{
    currentFunction = new DrawingFont(contextReal,contextDraft);
});
$('#drawing-paint').click(()=>{
    currentFunction = new DrawingPaint(contextReal,contextDraft);
});
$('#drawing-eye-dropper').click(()=>{
    currentFunction = new DrawingEyeDropper(contextReal,contextDraft);
});
$('#drawing-eraser').click(()=>{
    currentFunction = new DrawingEraser(contextReal,contextDraft);
});
$('#drawing-reset').click(()=>{
    currentFunction = new DrawingReset(contextReal);
});
$('#drawing-save').click(()=>{
    saveAsImage(contextReal);
});
$('#drawing-undo').click(()=>{
    cUndo();
});
$('#drawing-redo').click(()=>{
    cRedo();
});
$('#drawing-filter-GY').click(()=>{
    filter("grayscale");
});
$('#drawing-filter-BRUP').click(()=>{
    filter("brightnessUp");
});
$('#drawing-filter-BRDN').click(()=>{
    filter("brightnessDown");
});
$('#drawing-filter-threshold').click(()=>{
    filter("threshold");
});
$('#drawing-filter-convolute-sharpen').click(()=>{
    filter("convolute-sharpen");
});
$('#drawing-filter-convolute-blur').click(()=>{
    filter("convolute-blur");
});
$('#drawing-background').on("change", function(event){
    setBackground(event);
});
// $('#set-stroke-color').click(()=>{
//     strokeColor = `rgba(125, 125, 125, 1)`;
// });
// $('#set-fill-color').click(()=>{
//     fillColor = `rgba(200, 200, 200, 0.5)`;
// });