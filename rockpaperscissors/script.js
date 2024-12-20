//rock paper scissors buttons
const rock = document.getElementById("rockBtn");
const paper = document.getElementById("paperBtn");
const scissors = document.getElementById("scissorsBtn");

//paragrapgh element
const parg = document.getElementById("myParg");
const parg2 = document.getElementById("myParg2");
//prob test button
const testBtn = document.getElementById("numTest");

//button event listeners
rock.addEventListener("click", playRock);
paper.addEventListener("click", playPaper);
scissors.addEventListener("click", playScissors);

testBtn.addEventListener("click", testProb);

/*
botdes = 1: rock
botdes = 2: paper
botdes = 3: scissors
*/


//player chooses rock
function playRock() {
    botDes = getRandom();
    if (botDes == 1) {
        console.log("rock: tie");
        parg.textContent = `You: rock || CPU: rock`;
        parg2.textContent = `Tie!`;
    } else if (botDes == 2) {
        console.log("paper: loss");
        parg.textContent = `You: rock || CPU: paper`;
        parg2.textContent = `Loss.`;
    } else if (botDes == 3) {
        console.log("scissors: win");
        parg.textContent = `You: rock || CPU: scissors`;
        parg2.textContent = `Win!`;
    } else {
        uhOh();
    };
};

//player chooses paper
function playPaper() {
    botDes = getRandom();
    if (botDes == 1) {
        console.log("rock: win");
        parg.textContent = `You: paper || CPU: rock`;
        parg2.textContent = `Win!`;
    } else if (botDes == 2) {
        console.log("paper: tie");
        parg.textContent = `You: paper || CPU: paper`;
        parg2.textContent = `Tie!`;
    } else if (botDes == 3) {
        console.log("scissors: loss");
        parg.textContent = `You: paper || CPU: scissors`;
        parg2.textContent = `Loss.`;
    } else {
        uhOh();
    };
}

//player chooses scissors
function playScissors() {
    botDes = getRandom();
    if (botDes == 1) {
        console.log("rock: loss");
        parg.textContent = `You: scissors || CPU: rock`;
        parg2.textContent = `Loss.`;
    } else if (botDes == 2) {
        console.log("paper: win");
        parg.textContent = `You: scissors || CPU: paper`;
        parg2.textContent = `Win!`;
    } else if (botDes == 3) {
        console.log("scissors: tie");
        parg.textContent = `You: scissors || CPU: scissors`;
        parg2.textContent = `Tie!`;
    } else {
        uhOh();
    };
}


//debug tool
function uhOh() {
    console.log("we should not have gotten here");
};

//test probability of random numbers
function testProb() {
    var count = 0;
    var laps = 10000;

    let num1 = 0, num2 = 0, num3 = 0;
    let random = 0;

    while (count != laps) {
        random = 0;
        count += 1;
        random = getRandom();

        if (random == 1) {
            num1 += 1;
        } else if (random == 2) {
            num2 += 1;
        } else if (random == 3) {
            num3 += 1;
        } else {
            uhOh();
        };
    };

    let perc1 = Math.round((num1 / laps) * 100);
    let perc2 = Math.round((num2 / laps) * 100);
    let perc3 = Math.round((num3 / laps) * 100);

    console.log(`${perc1}% ${perc2}% ${perc3}%`);
};

//get random number
function getRandom() {
    let num = Math.floor(Math.random() * 4);
    if (num == 0) {
        return getRandom();
    } else {
        return num;
    };
}