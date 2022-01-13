function final(yourChoice) {
    var mychoice, boatchoice;
    mychoice = yourChoice.id;
    boatchoice = numberToChoice(randomnum());
    console.log(boatchoice);
    results = decideWinner(mychoice, boatchoice);
    console.log(results);
    message = finalMessege(results);
    console.log(message);
    displaypart(yourChoice.id, boatchoice, message);
}

// Random Number 0,1,2
function randomnum() {
    return Math.floor(Math.random() * 3);
}

// Number to Choice for boat
function numberToChoice(num) {
    return ['rock', 'paper', 'scissor'][num];
}

// Decide Winner
function decideWinner(mychoice, boatchoice) {
    var rpsDataBase =
    {
        'rock': { 'scissor': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'scissor': 0, 'rock': 1, 'paper': 0.5 },
        'scissor': { 'scissor': 0.5, 'rock': 0, 'paper': 1 }
    };
    var yourscore = rpsDataBase[mychoice][boatchoice];
    var boatscore = rpsDataBase[boatchoice][mychoice];
    return [yourscore, boatscore];
}

// For final message
function finalMessege([yourscore, boatscore]) {
    if (yourscore === 0) {
        return { 'message': 'You Lose!', 'color': 'red' };
    }
    else if (yourscore === 0.5) {
        return { 'message': 'You Tied!', 'color': 'yellow' };
    }
    else {
        return { 'message': 'You Won!', 'color': 'green' };
    }
}

// For display part
function displaypart(yourimage, boatimage, finalmessage) {
    var imagedatabase =
    {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    };
    //remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var yourdiv = document.createElement('div');
    var messagediv = document.createElement('div');
    var botdiv = document.createElement('div');


    yourdiv.innerHTML = "<img src='" + imagedatabase[yourimage] + "' heigth=150 width=150 style='box-shadow: 0px 10px 50px blue;'>"
    botdiv.innerHTML = "<img src='" + imagedatabase[boatimage] + "' heigth=150 width=150 style='box-shadow: 0px 10px 50px red;'>"
    messagediv.innerHTML = "<h1 style='color: " + finalmessage['color'] + "; font-size: 60px; padding:30px; '>" + finalmessage['message'] + "</h1>";
    document.getElementById('flex-box').appendChild(yourdiv);
    document.getElementById('flex-box').appendChild(messagediv);
    document.getElementById('flex-box').appendChild(botdiv);

}