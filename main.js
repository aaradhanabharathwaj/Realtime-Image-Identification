function setup(){
    canvas= createCanvas(350,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/k8Oxl2sG5/model.json", modelLoaded);
}
function draw(){
image(video,0,0,350,300);
classifier.classify(video,gotResult);
}
function modelLoaded(){
    console.log("Model Loaded !!");
}
function gotResult(error,results){
    if(error){
    console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("para_object").innerHTML=results[0].label;
        document.getElementById("para_identify").innerHTML=results[0].confidence.toFixed(3);
    }
}