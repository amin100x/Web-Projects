
var allbutton = document.getElementsByTagName('button');
var copyallbutton = [];
for (let i = 0; i < allbutton.length; i++) {
    copyallbutton.push(allbutton[i].classList[1]);
}


function buttonColorChange(buttoncolor) {
    if (buttoncolor.value === 'Red') {
        buttonred();
    }
    else if (buttoncolor.value === 'Green') {
        buttongreen();
    }
    else if (buttoncolor.value === 'Yellow') {
        buttonyellow();
    }
    else if (buttoncolor.value === 'Blue') {
        buttonblue();
    }
    else if (buttoncolor.value === 'Reset') {
        buttonreset();
    }
    else if (buttoncolor.value === 'Random') {
        buttonrandom();
    }

}

function buttonred() {
    for (let i = 0; i < allbutton.length; i++) {
        allbutton[i].classList.remove(allbutton[i].classList[1]);
        allbutton[i].classList.add('btn-danger');
    }
}

function buttongreen() {
    for (let i = 0; i < allbutton.length; i++) {
        allbutton[i].classList.remove(allbutton[i].classList[1]);
        allbutton[i].classList.add('btn-success');
    }
}
function buttonyellow() {
    for (let i = 0; i < allbutton.length; i++) {
        allbutton[i].classList.remove(allbutton[i].classList[1]);
        allbutton[i].classList.add('btn-warning');
    }
}
function buttonblue() {
    for (let i = 0; i < allbutton.length; i++) {
        allbutton[i].classList.remove(allbutton[i].classList[1]);
        allbutton[i].classList.add('btn-primary');
    }
}

function buttonreset() {
    for (let i = 0; i < allbutton.length; i++) {
        allbutton[i].classList.remove(allbutton[i].classList[1]);
        allbutton[i].classList.add(copyallbutton[i]);
    }
}

function buttonrandom() {
    var color = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];

    for (let i = 0; i < allbutton.length; i++) {
        var randomnum = Math.floor(Math.random() * 4);
        allbutton[i].classList.remove(allbutton[i].classList[1]);
        allbutton[i].classList.add(color[randomnum]);
    }
}