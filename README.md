# Canvas

### To Do

1. Drawing Fx
2. UI / Mobile Support
3. Un-dos(Re-do)



### Drawing Fx

1. Rectangle / Square
2. Ellipse / Circle
3. Straight line
4. Pencil / Brush
5. Fonts
6. Eraser / Clear
7. Fill color, Stroke color, Paint



### Re-Un-do

```
ctx.save();
```

```
ctx.restore();
```

Output: 

API [`toBlob()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob)

[Firebase Storage](https://firebase.google.com/)



### UI



`canvas-common.js`

https://www.youidraw.com/apps/painter/



size option 

border / fill color option

display



### Maybe

- Different type of brush in this [article](http://perfectionkills.com/exploring-canvas-drawing-techniques/)

1. DL / UL
2. Background img / filter (probably not)
3. Mobile Support




### 16/03/2018

##### Rectangle (solid & hollow)

mouse-down on canvas to start (top-left), drag to resize, mouse-up to draw, hold shift for square

##### Square (solid & hollow)

mouse-down on canvas to start (origin), drag to resize (radius), mouse-up to draw

##### Straight line

mouse-down on canvas to start (starting point), drag to resize (length), mouse-up to draw

##### Polygon

mouse-down on canvas to start (starting point), drag to resize (length), mouse-up to draw first line

move mouse and then click to draw more lines

hold shift when click to auto complete

##### Pencil

mouse-down on canvas to start drawing, mouse-up to stop

##### Quadratic Curve

1st click on canvas to set starting point, 2nd click on canvas to set on point, mouse-down and drag to locate control point, mouse-up  to set control point and draw

##### Eraser

mouse-down on canvas to start erasing, mouse-up to stop

##### Clear

Reset the canvas

##### To do

dotted line for straight line, hollow rectangle/circle/polygon, quad.curve

ellipse

brush

fonts

color/paint

