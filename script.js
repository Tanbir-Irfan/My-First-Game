// Users Details

function $(element) {
    return document.querySelector(element);
}
var detailsBoard = $("#detailsBoard");
var startGame = $("#startGame");
var participantName = $("#participantNameInput");
var targetScore = $("#targetScoreInput");
participantName.value = "";
targetScore.value = "";
var namePreserve, targetPreserve;
var gameBoard = $("#gameBoard");
let pointer = $("#special");
let pointerBackedUp = $("#specialBackedUp");
var backgroundDiv = [
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg",
    "img/6.jpg",
    "img/7.jpg",
    "img/8.jpg",
    "img/9.jpg",
];
var div = document.querySelectorAll(".box"); // All Selector
var xAxis = 0,
    yAxis = 0;
    count = 0,
    vanish = 1,
    attackCount = 0;
var timeOut1, timeOut2;
var scoreBoard = $("#scoreBoard");
var participantNamePrint = $("#participantNamePrint");
var finalScorePrint = $("#finalScorePrint");
var playAgain = $("#playAgain");
startGame.addEventListener("click", function () {
    namePreserve = participantName.value;
    targetPreserve = targetScore.value;
    participantName.value = "";
    targetScore.value = "";
    setTimeout(function () {
        detailsBoard.style.display = "none";
        gameBoard.style.display = "block";
        timerFunction();
    }, 1000);
});

// Game Part
function point() {
    if (vanish >= 6) {
        var colorApply = Math.floor(Math.random() * 5);
    } else {
        var colorApply = Math.floor(Math.random() * 8);
    }
    pointer.style.backgroundImage = "url(" + backgroundDiv[colorApply] + ")";
    pointerBackedUp.style.backgroundImage = "url(" + backgroundDiv[colorApply] + ")";
}

function allColor() {
    for (let i = 0; i < 12; i++) {
        var colorApply = Math.floor(Math.random() * 9);
        div[i].style.backgroundImage = "url(" + backgroundDiv[colorApply] + ")";
    }
}

function blockDisplay() {
    for (let i = 0; i < 12; i++) {
        div[i].style.display = "block";
    }
}

function noneDisplayPointer(index) {
    yAxis = pointer.offsetTop - 396;
    pointerBackedUp.style.top = yAxis + "px";
    pointerBackedUp.style.transition = "0.3s all ease";
    timeOut1 = setTimeout(function () {
        pointerBackedUp.style.display = "none";
        div[index].style.display = "none";
        attackCount++;
    }, 300);
    timeOut2 = setTimeout(function () {
        yAxis = 582;
        pointerBackedUp.style.top = yAxis + "px";
        pointerBackedUp.style.transition = "none";
        pointerBackedUp.style.display = "flex";
        point();
        vanish++;
        if (vanish === 13) {
            allColor();
            blockDisplay();
            vanish = 1;
        }
    }, 300);
}

function checkDisplay(bigIndex, smallIndex) {
    if (div[bigIndex].style.display != "none") {
        if (pointer.style.backgroundImage === div[bigIndex].style.backgroundImage) {
            noneDisplayPointer(bigIndex);
        }
    } else if (
        pointer.style.backgroundImage === div[smallIndex].style.backgroundImage
    ) {
        if (div[bigIndex].style.display === "none") {
            noneDisplayPointer(smallIndex);
        }
    }
}

function pointerPosition(axis) {
    pointer.style.left = axis + "px";
    pointerBackedUp.style.left = axis + "px";
}
point();
allColor();

//Main Functionality
document.body.addEventListener("keyup", function (event) {
    //Left Part
    if (event.keyCode === 37) {
        if (pointer.offsetLeft > 223) {
            xAxis = pointer.offsetLeft - 190;
            pointerPosition(xAxis);
        } else {
            xAxis = 1173;
            pointerPosition(xAxis);
        }
    }
    // Right part
    else if (event.keyCode === 39) {
        if (pointer.offsetLeft < 1173) {
            xAxis = pointer.offsetLeft + 190;
            pointerPosition(xAxis);
        } else {
            xAxis = 223;
            pointerPosition(xAxis);
        }
    }
    /// Color Part
    else if (event.keyCode === 82) {
        for (let i = 0; i < 12; i++) {
            if (vanish >= 6) {
                var colorApply = Math.floor(Math.random() * 5);
            } else {
                var colorApply = Math.floor(Math.random() * 8);
            }
            div[i].style.backgroundImage = "url(" + backgroundDiv[colorApply] + ")";
        }
        count++;
        if (count == 2) {
            point();
            count = 0;
        }
    }
    // Div Box none part
    else if (event.keyCode === 70) {
        if (pointer.offsetLeft < 345) {
            checkDisplay(6, 0);
        } else if (pointer.offsetLeft < 535 && pointer.offsetLeft > 345) {
            checkDisplay(7, 1);
        } else if (pointer.offsetLeft < 725 && pointer.offsetLeft > 535) {
            checkDisplay(8, 2);
        } else if (pointer.offsetLeft < 915 && pointer.offsetLeft > 725) {
            checkDisplay(9, 3);
        } else if (pointer.offsetLeft < 1100 && pointer.offsetLeft > 915) {
            checkDisplay(10, 4);
        } else if (pointer.offsetLeft < 1280 && pointer.offsetLeft > 1100) {
            checkDisplay(11, 5);
        }
    } else if (event.keyCode === 86) {
        allColor();
        blockDisplay();
        vanish = 1;
    }
});

//Timer Part
function timerFunction() {
    var timerDivId = document.querySelector("#timer");
    var timeCount = 30;
    var myVar = setInterval(function () {
        timeCall();
    }, 1000);

    function timeCall() {
        if (timeCount < 10) {
            timerDivId.innerHTML = "0" + timeCount;
        } else {
            timerDivId.innerHTML = timeCount;
        }
        timeCount--;
        if (timeCount === -1) {
            clearInterval(myVar);
            gameBoard.style.display = "none";
            scoreFunction();
        }
    }
}

/// Score Part
function scoreFunction() {
    scoreBoard.style.display = "block";
    participantNamePrint.innerHTML = namePreserve;
    finalScorePrint.innerHTML = attackCount;
    attackCount = 0;
    count=0;
    vanish=1;
    yAxis = 0;
}
playAgain.addEventListener("click", function () {
    allColor();
    blockDisplay();
    scoreBoard.style.display = "none";
    gameBoard.style.display = "block";
    timerFunction();
    pointerPosition(603);
    clearTimeout(timeOut1);
    clearTimeout(timeOut2);
});