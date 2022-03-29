function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/[...]', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function result(){
    results_lable=document.getElementById(ml5.soundClassifier);
}



