< !DOCTYPE html >
  <html lang="en">
    <head>
      <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Quilt Design App</title>
          <script src="https://cdn.jsdelivr.net/npm/konva@8.1.1/konva.min.js"></script>
          <style>
            body {
              margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f0f0;
    }
            #container {
              border: 1px solid #ccc;
    }
          </style>
        </head>
        <body>
          <div id="container"></div>

          <script>
    // Set up stage
            var stage = new Konva.Stage({
              container: 'container',
            width: 300,
            height: 300
    });

            var layer = new Konva.Layer();
            stage.add(layer);

            // Grid parameters
            var gridSize = 10;
            var cellSize = stage.width() / gridSize;

            // Create grid of triangles
            for (var i = 0; i < gridSize; i++) {
      for (var j = 0; j < gridSize; j++) {
        var x = i * cellSize;
            var y = j * cellSize;
            var color = '#ffffff'; // Default color

            // Create triangle
            var triangle = new Konva.RegularPolygon({
              x: x + (cellSize / 2),
            y: y + (cellSize / 2),
            sides: 3,
            radius: cellSize / 2,
            fill: color,
            stroke: '#ccc',
            strokeWidth: 1,
            draggable: false,
            name: 'triangle'
        });

            // Add triangle to layer
            layer.add(triangle);
      }
    }

            // Add event listener to detect taps
            stage.on('click', function (e) {
      var triangle = e.target;
            if (triangle && triangle.name() === 'triangle') {
        // Change color of tapped triangle
        var color = document.getElementById('color').value;
            triangle.fill(color);
            layer.batchDraw();
      }
    });

            // Draw the layer
            layer.draw();
          </script>

          <!-- Color picker -->
          <input type="color" id="color" value="#000000">

        </body>
      </html>
