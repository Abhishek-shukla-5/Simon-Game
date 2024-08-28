let gameSeq=[];
let userSeq=[];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0; 

let h2 = document.querySelector("h2")

document.addEventListener("keypress", function(){
    if(started==false)
    {
        console.log("game started");
        started = true;

        levelup();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },250);
}

function levelup(){
    userSeq = [];
    level++;
    h2.innerText=`level  ${level}`;
    
    //random btn choose
    let randIdx= Math.floor(Math.random()* btns.length);
    let randcolor = btns[randIdx];
    let randBtn = document.querySelector(`.${randcolor}`);
    // console.log(randIdx);
    // console.log(randcolor);
    // console.log(randBtn);
    gameSeq.push(randcolor);
    console.log(gameSeq);
    btnFlash(randBtn);

}

function checkAns () {
    // console.log("curr level : ", level);
    let idx = level-1;

    if (userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelup,1000);

        }

    }
    else {
        h2.innerHTML = `Game over!Your score was <b>${level}</b><br>  press any key to start`;
        document.querySelector("body").style.backgroundcolor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundcolor = "white";
        },150)
        reset();
    }
}

function btnPress() {
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);

}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click",btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}