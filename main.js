function preload(){

}

function setup(){
canvas=createCanvas(400,400);
canvas.center();
canvas.position(515,370);
cam=createCapture(VIDEO);
cam.hide();
myModel=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/FZxNXJ0ZK/model.json",modelLoaded);
}

function modelLoaded(){
    console.log("model loaded");
}

function gotresult(error,answer){
    if(error){
        console.error(error);
    }
    else{
        console.log(answer);
        document.getElementById("object").innerHTML="Object: "+answer[0].label;
        percentage=answer[0].confidence.toFixed(2);
        accuracy=100*percentage;
        document.getElementById("accuracy").innerHTML="Accuracy: "+accuracy+"%";

    }
}

function draw(){
image(cam,0,0,400,400);
myModel.classify(cam,gotresult);
}