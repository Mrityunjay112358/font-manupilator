rightwristy=0;
leftwristy=0;
difference=0;
rightwristx=0;
leftwristx=0;

function setup(){
    canvas = createCanvas(600,500);
    canvas.position(680,100)
    video = createCapture(VIDEO);
    video.size(600,500);
posenet = ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);
}

function modelLoaded(){
console.log("model is initialized");
}

function gotPoses(results){
if(results.length>0){
console.log(results);
leftwristx = results[0].pose.leftWrist.x;
rightwristx = results[0].pose.rightWrist.x;
difference = floor(leftwristx - rightwristx);
console.log("leftwristx = "+leftwristx+" rightwristx = "+rightwristx);
}
}

function draw(){
    background("#f2e98b");
    document.getElementById("font_size").innerHTML = "The Size Of The Text is "+difference+"px";
    rectMode(CENTER);
  greet =  text("Bonjour!",0,250);
greet.textSize(difference);  
}