const sliderMoveR = document.querySelector(".eleccion .sliderMove");
const arrow       = document.querySelectorAll(".eleccion button");
let   value       = 0;
let   limitSup    = 5;

arrow[0].addEventListener("click", ()=>{
    value--;
    moveR(value);
    if(value === 0) {
        arrow[0].style.visibility = "hidden";
    }
    arrow[1].style.visibility = "visible";
});

arrow[1].addEventListener("click", ()=>{
    value++;
    moveR(value);
    if(value === limitSup) {
        arrow[1].style.visibility = "hidden";
    }
    arrow[0].style.visibility = "visible";
});


function moveR() {
    sliderMoveR.style.transform = `translateX(-${100/6 * value}%)`;
}