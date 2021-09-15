img = "";
status = "";
objects = [];
function setup()
{
canvas = createCanvas(640, 420);
canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded()
{
console.log('Model is loaded!');
status = true;
objectDetector.detect(img, gotResult);
}
function gotResult(error,results)
{
if (error)
{
console.log(error); 
}
console.log(results);
objects = results;
}
function preload()
{
img = loadImage('Bedroom.jpg');
}
function draw()
{
    text("Bed 74%", 320, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 90, 320, 320);
}
function Back()
{
window.location = "index.html";
}