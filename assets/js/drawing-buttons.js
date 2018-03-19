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
$('#drawing-background').click(()=>{
    setBackground();
    // currentFunction = new DrawingBackground(contextReal); // context-bg
});
// $('#set-stroke-color').click(()=>{
//     strokeColor = `rgba(125, 125, 125, 1)`;
// });
// $('#set-fill-color').click(()=>{
//     fillColor = `rgba(200, 200, 200, 0.5)`;
// });