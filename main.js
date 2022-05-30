function setup(){
    video = createCapture(VIDEO);
    video.size(320,240);
    canvas = createCanvas(550,550);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is initialized');
}

function gotPoses(result){
    if(results.length>0){
        console.log(results);
    }
}

