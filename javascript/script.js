const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const parg = document.getElementById("p");

btn1.addEventListener("click", btnFn1);
btn2.addEventListener("click", btnFn2);

var numOfNum;
let a;

function btnFn1() {
    numOfNum = window.prompt("hello");
    numOfNum = parseInt(numOfNum)
};

function btnFn2() {
    numOfNum = getRandom(numOfNum);
    parg.innerHTML = numOfNum;
    console.log(numOfNum);
};

function getRandom(amount) {
    a = Math.floor(Math.random() * (1 + amount));
    if (a == 0) {
        return getRandom(amount);
    } else {
        return a;
    }
};