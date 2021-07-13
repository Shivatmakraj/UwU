img = "";
status = "";
object=[];

function preload() {
   
}
function setup() {
    canvas = createCanvas(640, 420)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide(); 
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="STATUS : DETECTING OBJECT(s)";
}
function draw() {
    image(video, 0, 0, 640, 420);
if(status!=""){
r=random(255);
g=random(255);
b=random(255);
    for (i = 0; i < object.length; i++) {
        document.getElementById("status").innerHTML="STATUS : DECTECTED OBJECT(s)";
        document.getElementById("number[object]").innerHTML="NUMBER OF OBJECT(s) DETECTED ARE"+object.length;
       
        fill(r,g,b);
        percent=floor(object[i].confidence*100);

        text(object[i].label+""+percent+"%",object [i].x + 15,object[i].y + 15);
        noFill();
        stroke(r,g,b);
        rect(object[i].x,object[i].y,object[i].width,object[i].height)
    }
}
   
    // fill("#FF0001");

    // fill("FF0001")
    // text("kitten", 320, 120)
    // noFill();
    // rect(300, 90, 270, 320)
    // fill("#FF0001");
}
function modelLoaded(){
    console.log("THE MODEL HAS BEEN LoAdEd!")
    status=true;
    objectDetector.detect(img,gotResults);        
}
function gotResults(results,error)
{
    object=results;
    if(error){
    console.error(error)
    }
    else{
        console.log(results)
    }
}
