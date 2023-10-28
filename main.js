img="";
status="";
function preload()
{
    img=loadImage('photo-1588058365815-c96ac30ee30f.avif');
}
function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
}
function modelLoaded()
{
    console.log("model is loaded");
    status=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,result)
{
   if(error)
   {
    console.log(error);
   }
   else
   {
    console.log(result);
   }
}
function draw()
{
    image(img,0,0,640,420);
    fill("red");
    text("Laptop",300,110);
    noFill();
    stroke("red");
    rect(300,100,250,300);
    fill("red");
    text("Phone",210,80);
    noFill();
    stroke("red");
    rect(200,60,90,210);

}