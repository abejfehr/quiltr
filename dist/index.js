// Set up stage
var stage = new Konva.Stage({
  container: "container",
  width: 800,
  height: 800,
});
var layer = new Konva.Layer();
stage.add(layer);
// Grid parameters
var gridSize = 20;
var cellSize = stage.width() / gridSize;
var colors = [
  "#ffffff",
  "#333232",
  "#FF495C",
  "#256EFF",
  "#FFCB47",
  "#EBBAB9",
  "#46237A",
  "#3DDC97",
  "#784F41",
]; // Colors for buttons
var selectedColor = "#000000"; // Default selected color
// Create grid of squares
for (var i = 0; i < gridSize; i++) {
  for (var j = 0; j < gridSize; j++) {
    var x = (i * cellSize) / 2;
    var y = (j * cellSize) / 2;
    var color = "#ffffff"; // Default color
    // Create top triangle
    var triangleT = new Konva.Shape({
      sceneFunc: function sceneFunc(context, shape) {
        context.beginPath();
        context.moveTo(shape.x(), shape.y());
        context.lineTo(shape.x() + cellSize, shape.y());
        context.lineTo(shape.x() + cellSize / 2, shape.y() + cellSize / 2);
        context.closePath();
        // color should be updated
        context.fillStrokeShape(this);
      },
      fill: color,
      stroke: "#ccc",
      strokeWidth: 1,
      draggable: false,
      name: "triangle",
      color: color,
    });
    triangleT.x(x);
    triangleT.y(y);
    // Create left triangle
    var triangleL = new Konva.Shape({
      sceneFunc: function sceneFunc(context, shape) {
        context.beginPath();
        context.moveTo(shape.x(), shape.y());
        context.lineTo(shape.x(), shape.y() + cellSize);
        context.lineTo(shape.x() + cellSize / 2, shape.y() + cellSize / 2);
        context.closePath();
        // color should be updated
        context.fillStrokeShape(this);
      },
      fill: color,
      stroke: "#ccc",
      strokeWidth: 1,
      draggable: false,
      name: "triangle",
      color: color,
    });
    triangleL.x(x);
    triangleL.y(y);
    // Create right triangle
    var triangleR = new Konva.Shape({
      sceneFunc: function sceneFunc(context, shape) {
        context.beginPath();
        context.moveTo(shape.x() + cellSize, shape.y());
        context.lineTo(shape.x() + cellSize, shape.y() + cellSize);
        context.lineTo(shape.x() + cellSize / 2, shape.y() + cellSize / 2);
        context.closePath();
        // color should be updated
        context.fillStrokeShape(this);
      },
      fill: color,
      stroke: "#ccc",
      strokeWidth: 1,
      draggable: false,
      name: "triangle",
      color: color,
    });
    triangleR.x(x);
    triangleR.y(y);
    // Create bottom triangle
    var triangleB = new Konva.Shape({
      sceneFunc: function sceneFunc(context, shape) {
        context.beginPath();
        context.moveTo(shape.x(), shape.y() + cellSize);
        context.lineTo(shape.x() + cellSize, shape.y() + cellSize);
        context.lineTo(shape.x() + cellSize / 2, shape.y() + cellSize / 2);
        context.closePath();
        // color should be updated
        context.fillStrokeShape(this);
      },
      fill: color,
      stroke: "#ccc",
      strokeWidth: 1,
      draggable: false,
      name: "triangle",
      color: color,
    });
    triangleB.x(x);
    triangleB.y(y);
    // Add triangles to layer
    layer.add(triangleT, triangleL, triangleR, triangleB);
  }
}
// Add event listeners to buttons
var colorContainer = document.querySelector("#color-container");
colors.forEach(function (color, index) {
  var button = document.createElement("button");
  button.className = "color-button";
  button.style.backgroundColor = color;
  button.addEventListener("click", function () {
    // Change selected color
    selectedColor = color;
  });
  colorContainer.appendChild(button);
});
// Add event listener to detect taps
stage.on("click", function (e) {
  var triangle = e.target;
  if (triangle && triangle.name() === "triangle") {
    // Paint tapped triangle with selected color
    triangle.fill(selectedColor);
    layer.batchDraw();
  }
});
// Draw the layer
layer.draw();
