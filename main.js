function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
     classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/QDi9JLPb0/model.json",modelReady);

}

function modelReady()
{
    //var myAudio = new Audio('Welcome.ogg');//
console.log("modeluploaded");
   // myAudio.play();//

    classifier.classify(gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random()*255 + 1);
        random_number_g = Math.floor(Math.random()*255 + 1);
        random_number_b = Math.floor(Math.random()*255 + 1);

        document.getElementById("result_label").innerHTML = "I can hear -" + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy - " + (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    
        img = document.getElementById("alien1");
        img2 = document.getElementById("alien2");
        img3 = document.getElementById("alien3");
        img4 = document.getElementById("alien4");
    
        if (results[0].label == "clap"){
            img.src = "alien-01.gif";
            img2.src = "alien-02.png";
            img3.src = "alien-03.png";
            img4.src = "alien-04.png";
        }
        else if (results[0].label == "bell"){
            img.src = "alien-01.png";
            img2.src = "alien-02.gif";
            img3.src = "alien-03.png";
            img4.src = "alien-04.png";
        }
        else if (results[0].label == "plastic"){
            img.src = "alien-01.png";
            img2.src = "alien-02.png";
            img3.src = "alien-03.gif";
            img4.src = "alien-04.png";
        }
        else{
            img.src = "alien-01.png";
            img2.src = "alien-02.png";
            img3.src = "alien-03.png";
            img4.src = "alien-04.gif";
        }
    
    
    }

}