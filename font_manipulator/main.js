left_wrist_x = 0;
right_wrist_x = 0;
difference = 0;

function setup(){
    canvas = createCanvas(700,500);
    canvas.position(650,150)

    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(60,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('poseNet is initailized');
}

function gotPoses(results){
    if(results.length > 0);
    {
        console.log(results);
        left_wrist_x = results[0].pose.leftWrist.x;
        right_wrist_x = results[0].pose.rightWrist.x;
        difference = floor(left_wrist_x - right_wrist_x);
        console.log("Difference = "+ difference);
    }
}

function draw(){
    background('bisque');
    textSize(difference);
    fill('crimson');
    text('Anokhi',50,400);
    document.getElementById("font_size").innerHTML = "Font size = "+ difference;
}

