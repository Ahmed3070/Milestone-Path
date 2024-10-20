const timeline =document.getElementById("timeline");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let step =1;

function mainCode() {

}

next.addEventListener("click",()=> {
    step++;
    if(step > circles.length){
        step = circles.length;
    }
    mainCode();
});

prev.addEventListener("click",()=> {
    step--;
    if(step < 1) {
        step = 1;
    }
    mainCode();
});