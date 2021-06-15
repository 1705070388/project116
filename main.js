function preload() {
    pirateeye = loadImage("pirateeye-removebg-preview.png");
}
rightEyeX = 0;
rightEyeY = 0;
function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(500, 200);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("Posenet is initialized");
}
function draw() {
    image(video, 0, 0, 300, 300);
    image(pirateeye, rightEyeX, rightEyeY, 85,75);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        rightEyeX = results[0].pose.rightEye.x-10;
        rightEyeY = results[0].pose.rightEye.y-55;
        console.log("rightEye x = " + rightEyeX);
        console.log("rightEye y = " + rightEyeY);
    }
}
function takeSnapshot() {
    save("clown-nose-pic.png");
}