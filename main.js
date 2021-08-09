noseX=0;
noseY=0;
difference=0;
rightWristx=0;
leftWristx=0;

function setup(){
    video= createCapture(VIDEO);
    video.size(500,300);
    video.position(100, 200);

    canvas= createCanvas(500,300);
    canvas.position(600,200);

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#969A97');
    document.getElementById("square_sides").innerHTML= "Font-size of the text will be = "+difference+" px";
    fill('#ff33cf');
    stroke('#fc42d1');
    square(noseX, noseY, difference);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results) { 
    if(results.length > 0) { 
        console.log(results);
    }
}