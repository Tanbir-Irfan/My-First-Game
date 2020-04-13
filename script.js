window.onload = function() {
    document.getElementById("my_audio").play();
}
//prompt("Give me your name");
var backgroundDiv = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg','img/7.jpg','img/8.jpg','img/9.jpg'];
var xAxis,count=0,vanish=1;
let pointer = $("#special");
var div = document.querySelectorAll(".box");

// Function Creating
function $(element) {
    return document.querySelector(element);
}
function point(){
    if(vanish>=6){
        var colorApply = Math.floor(Math.random()*5);
    }
    else{
        var colorApply = Math.floor(Math.random()*8);
    }
    pointer.style.backgroundImage = 'url('+backgroundDiv[colorApply]+')';
}
function allColor(){
    for(let i=0; i<12; i++){
        var colorApply = Math.floor(Math.random()*9);
        div[i].style.backgroundImage = 'url('+backgroundDiv[colorApply]+')';
    }
}
function checkDisplay(bigIndex, smallIndex){
    if(div[bigIndex].style.display!="none"){
        if(pointer.style.backgroundImage === div[bigIndex].style.backgroundImage){
            div[bigIndex].style.display="none"
            point();
            vanish++;
        }
    }
    else if(pointer.style.backgroundImage === div[smallIndex].style.backgroundImage) {
        if(div[bigIndex].style.display==="none"){
            div[smallIndex].style.display="none";
            point();
            vanish++;
        }
    }
}
function blockDisplay(){
    for(let i=0; i<12; i++){
        div[i].style.display = "block";
    }
}
point();
allColor();

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
            if(vanish>=6){
                var colorApply = Math.floor(Math.random()*5);
            }
            else{
                var colorApply = Math.floor(Math.random()*8);
            }
            div[i].style.backgroundImage = 'url('+backgroundDiv[colorApply]+')';
        }
        count++;
        if(count==3){
            point();
            count=0;
        }
    }
    else if(event.keyCode === 70){
        if(pointer.offsetLeft<345){
            // if(div[6].style.display!="none"){
            //     if(pointer.style.backgroundImage === div[6].style.backgroundImage){
            //         xAxis = pointer.offsetTop - 400;
            //         pointer.style.top = xAxis + "px";
            //         pointer.style.transition = "0.5s all ease"
            //         setTimeout(function(){
            //         pointer.style.display = "none"
            //         div[6].style.display="none"
            //         },500)
                    
            //         //point();
            //         vanish++;
            //     }
            // }
            // else if(pointer.style.backgroundImage === div[0].style.backgroundImage) {
            //     if(div[6].style.display==="none"){
            //         div[0].style.display="none";
            //         point();
            //         vanish++;
            //     }
            // }
            checkDisplay(6,0);
        }
        else if(pointer.offsetLeft<535 && pointer.offsetLeft>345){
            checkDisplay(7,1);
        }        
        else if(pointer.offsetLeft<725 && pointer.offsetLeft>535){
            checkDisplay(8,2);
        }
        else if(pointer.offsetLeft<915 && pointer.offsetLeft>725){
            checkDisplay(9,3);
        }
        else if(pointer.offsetLeft<1100 && pointer.offsetLeft>915){
            checkDisplay(10,4);
        }
        else if(pointer.offsetLeft<1280 && pointer.offsetLeft>1100){
            checkDisplay(11,5)
        }
        if(vanish===13){
            allColor();
            blockDisplay();
            vanish=1;
        }

    }
    else if(event.keyCode === 86){
        allColor();
        blockDisplay();
        vanish=1;
    }
    else if(event.keyCode === 38){
        xAxis = pointer.offsetTop - 400;
        pointer.style.top = xAxis + "px";
        pointer.style.transition = "0.5s all ease"
        setTimeout(function(){
        pointer.style.display = "none"
        },500)
        
        console.log(pointer.offsetTop);
        
        // xAxis = pointer.offsetTop + 10;
        // pointer.style.display = "block";
        // pointer.style.top = xAxis + "px";
    }
})

/// Cutting part

var reload = $("#reload");
reload.addEventListener("click",function(){
    console.log("h");
    
})




