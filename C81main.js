canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = document.getElementById("blue");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200,200,40,0,2 * Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e) {
color = document.getElementById ("color").value;
width = document.getElementById ("width_of_line").value;
radius = document.getElementById ("radius").value
mousex = e.clientX - canvas.offsetLeft;
mousey = e.clientY - canvas.offsetTop;
console.log(mousex , mousey);
circle(mousex , mousey);
}

function circle (mousex , mousey) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.arc(mousex,mousey,40,radius,2 * Math.PI);
    ctx.stroke();
}