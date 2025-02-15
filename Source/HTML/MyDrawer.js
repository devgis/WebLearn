window.addEventListener('load', eventWindowLoaded, false);

var data ={orgpoints:[{x:300,y:200},{x:300,y:500},{x:1000,y:500},{x:1000,y:200}],newpoints:[{x:350,y:150},{x:250,y:450},{x:950,y:550},{x:1050,y:250}]}

function eventWindowLoaded () {
  canvasApp(); // 包含整个Canvas应用程序
}
function canvasSupport(e) {
  return !!e.getContext;
}
function canvasApp() {
  let canvas = document.getElementById('canvas');
  //canvas.width = document.documentElement.clientWidth;
  //canvas.height = document.documentElement.clientHeight;
  Point = function (x, y) {
    this.x = x;
    this.y = y;
  };

  const colors = ['#f0f', '#aaa', '#ff0', '#f0f', '#aaf', '#0f0', '#ccc', '#999', '#eee', '#ccc', '#606'];
  if (!canvasSupport(canvas)) {
    return;
  }
  let ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth-7; // - 100;
  canvas.height = window.innerHeight-7; // - 50;

  function drawHorizontalAxis() {
    ctx.beginPath();
    ctx.moveTo(10, canvas.height / 2 + 0.5);
    ctx.lineTo(canvas.width - 10, canvas.height / 2);
    ctx.stroke();
  }

  function drawVerticalAxis() {
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 10);
    ctx.lineTo(canvas.width / 2, canvas.height - 10);
    ctx.stroke();
  }

  function createPolygon(points, colorindex) {
    
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);

    for (let i = 0; i < points.length; ++i) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.strokeStyle = colors[colorindex];
    ctx.closePath();
    ctx.stroke();
  }

  function drawScreen() {
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#b3c3de';
    ctx.font = '24px Arial';
    drawHorizontalAxis();
    drawVerticalAxis();

    createPolygon(data.orgpoints,1);
    createPolygon(data.newpoints,0);
  
  }
  drawScreen();
}

