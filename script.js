window.onload = function() {
    document.getElementById("my_audio").play();
}

function $(element) {
    return document.querySelector(element);
}
function point(){
    pointer.style.backgroundColor = arrayColor[Math.floor(Math.random()*11)];
}
var arrayColor = ['palegreen', 'salmon', 'yellow', 'thistle', 'hotpink', 'tomato', 'rebeccapurple', 'sandybrown', 'royalblue', 'cadetblue', 'darkgoldenrod', 'aqua'];
var xAxis,count=0;
let pointer = $("#special");
var div = document.querySelectorAll(".box");
point();
for(let i=0; i<12; i++){
    var colorApply = Math.floor(Math.random()*11);
    div[i].style.background = arrayColor[colorApply];
}

//Main Functionality
document.body.addEventListener("keyup", function (event) {
    //Left Part
    if (event.keyCode === 37) {
        if (pointer.offsetLeft > 223) {
            xAxis = pointer.offsetLeft - 190;
            pointer.style.left = xAxis + "px";
        } else {
            xAxis = 1173;
            pointer.style.left = xAxis + "px";
        }
    } 
    // Right part
    else if (event.keyCode === 39) {
        if (pointer.offsetLeft < 1173) {
            xAxis = pointer.offsetLeft + 190;
            pointer.style.left = xAxis + "px";
        } else {
            xAxis = 223;
            pointer.style.left = xAxis + "px";
        }
    } 
    /// Color Part
    else if (event.keyCode === 82) {
        for (let i = 0; i < 12; i++) {
            var random = Math.floor(Math.random() * 11);
            div[i].style.background = arrayColor[random];
        }
        count++;
        if(count==2){
            point();
            count=0;
        }
    }
    else if(event.keyCode === 70){
        if(pointer.offsetLeft<345){
            if(div[6].style.display!="none"){
                if(pointer.style.backgroundColor === div[6].style.backgroundColor){
                    div[6].style.display="none"
                    point();
                }
            }
            else if(pointer.style.backgroundColor === div[0].style.backgroundColor) {
                if(div[6].style.display==="none"){
                    div[0].style.display="none";
                    point();
                }
            }
        }
        else if(pointer.offsetLeft<535 && pointer.offsetLeft>345){
            if(div[7].style.display!="none"){
                if(pointer.style.backgroundColor === div[7].style.backgroundColor){
                    div[7].style.display="none"
                    point();
                }
            }
            else if(pointer.style.backgroundColor === div[1].style.backgroundColor) {
                if(div[7].style.display==="none"){
                    div[1].style.display="none";
                    point();
                }
            }
        }        
        else if(pointer.offsetLeft<725 && pointer.offsetLeft>535){
            if(div[8].style.display!="none"){
                if(pointer.style.backgroundColor === div[8].style.backgroundColor){
                    div[8].style.display="none"
                    point();
                }
            }
            else if(pointer.style.backgroundColor === div[2].style.backgroundColor) {
                if(div[8].style.display==="none"){
                    div[2].style.display="none";
                    point();
                }
            }
        }
        else if(pointer.offsetLeft<915 && pointer.offsetLeft>725){
            if(div[9].style.display!="none"){
                if(pointer.style.backgroundColor === div[9].style.backgroundColor){
                    div[9].style.display="none"
                    point();
                }
            }
            else if(pointer.style.backgroundColor === div[3].style.backgroundColor) {
                if(div[9].style.display==="none"){
                    div[3].style.display="none";
                    point();
                }
            }
        }
        else if(pointer.offsetLeft<1100 && pointer.offsetLeft>915){
            if(div[10].style.display!="none"){
                if(pointer.style.backgroundColor === div[10].style.backgroundColor){
                    div[10].style.display="none"
                    point();
                }
            }
            else if(pointer.style.backgroundColor === div[4].style.backgroundColor) {
                if(div[10].style.display==="none"){
                    div[4].style.display="none";
                    point();
                }
            }
        }
        else if((pointer.offsetLeft<1280 && pointer.offsetLeft>1100) && ((pointer.style.backgroundColor === div[5].style.backgroundColor) || (pointer.style.backgroundColor === div[11].style.backgroundColor))){
            if(div[11].style.display!="none"){
                if(pointer.style.backgroundColor === div[11].style.backgroundColor){
                    div[11].style.display="none"
                    point();
                }
            }
            else if(pointer.style.backgroundColor === div[5].style.backgroundColor) {
                if(div[11].style.display==="none"){
                    div[5].style.display="none";
                    point();
                }
            }
        }

    }
})

/// Cutting part