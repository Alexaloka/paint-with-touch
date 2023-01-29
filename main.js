var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

canvas = document.getElementById('mycanvas');
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    color = document.getElementById("color").Value;
    width_of_line = document.getElementById("width_of_line").Value;
    mouseEvent = "mouseDown";

}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsrtLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDpwn") {
        ctx.beingPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("last position of x and y coordinates = ");
        console.log("x ="+ last_position_of_mouse_x  = "y =" + last_position_of_mouse_y);
        ctx.moveTo(last_position_of_mouse_x , last_position_of_mouse_y);

        console.log("Current position ofx and y coordinates = ");
        console.log("x =" + current_position_of_mouse_x  = "y =" +current_position_of_mouse_y)
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }
}