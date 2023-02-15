function preload(){

}

function setup(){
    canvas = createCanvas(400,400);
    canvas.center();

    video = createCapture(400,400);
    video.hide()
}

function draw(){
    image(video,0,0,400,400);
}

function play(){
    document.body.style.background = "#f3f3f3 url('background.jpg') no-repeat right top ";//for changing background
    document.body.style.backgroundSize = "cover";//for changing size
   
}
