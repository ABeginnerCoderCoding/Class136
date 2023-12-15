noseX = 0
noseY = 0
difference = 0
rightWristX = 0
leftWristX = 0
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,550);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is initialized!');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftWristX = floor(results[0].pose.leftWrist.x);
        rightWristX = floor(results[0].pose.rightWrist.x);
        difference = leftWristX - rightWristX;
        console.log("noseX = " + noseX + " noseY = " + noseY);
        console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + " difference = " + difference);
        document.getElementById("font-size").innerHTML = difference +  "px";
    }
}
function draw(){
    background('#816f87');
    textSize(difference);
    fill('#badbed');
    text("Ashley", noseX,noseY)
}