let gameseq = [];
let userseq = [];

let start = false;
let level = 0;

let btns = ['b1', 'b2', 'b3', 'b4'];

let boxs = document.querySelectorAll(".box1");
let h3 = document.querySelector("h3");

document.addEventListener("keypress", function () {
    if (start == false) {
        console.log("Game Started");
        start = true;
        levelup();
    }


});

function levelup() {
    userseq = [];
    level++;
    h3.textContent = `Level ${level}`;

    // random btn flash...
    let randominx = Math.floor(Math.random() * 3);
    let randombtn = document.querySelector(`#${btns[randominx]}`);
    gameseq.push(randombtn);
    btnflash(randombtn);
}

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 500);
}

let boxes = document.querySelectorAll(".box1");

for (let box of boxes) {
    box.addEventListener("click", btnpress);
}

function btnpress() {
    let btn = this;
    btnflash(btn);
    userseq.push(btn);

    checkAns(userseq.length - 1);
}

function checkAns(indx) {
    if (userseq[indx] == gameseq[indx]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelup, 1000);
        }

    } else {
        h3.innerHTML = `Game over! <b>Your Score is ${level} <br>Press any key to start the game`;
        reset();
    }
}

function reset() {
    userseq = [];
    gameseq = [];
    start = false;
    level = 0;
}



