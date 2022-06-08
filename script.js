




var progress = 0; 
var gamePlaying = false;

function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;
  // swap the Start and Stop buttons
    document.getElementById("clickBtn").classList.add("hidden");
    document.getElementById("displayBtn").classList.remove("hidden");
    playClueSequence();
}

function stopGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = false;
  // swap the Start and Stop buttons
    document.getElementById("clickBtn").classList.remove("hidden");
    document.getElementById("displayBtn").classList.add("hidden");
}


