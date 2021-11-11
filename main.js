differecne = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);
    
    canvas = createCanvas(550,550);
    canvas.positon(560,150);

    posNet = ml5.posNet(video, modelLoaded);
    posenet.on('pose', gotPosed);
}