const sliderMove  = document.querySelector(".personalizadas .sliderMove");
const buttonArrow = document.querySelectorAll(".personalizadas .slider button");
let number        = 0, limitSupP = 4;

buttonArrow[0].addEventListener("click", ()=>{
    number--;
    move(number);
    if(number === 0) {
        buttonArrow[0].style.visibility = "hidden";
    }
    buttonArrow[1].style.visibility = "visible";
});

buttonArrow[1].addEventListener("click", ()=>{
    number++;
    move(number);
    if(number === limitSupP) {
        buttonArrow[1].style.visibility = "hidden";
    }
    buttonArrow[0].style.visibility = "visible";
});

function move() {
    sliderMove.style.transform = `translateX(-${100/8 * number}%)`;
}

if(window.innerWidth <= 700) {
    limitSupP = 6;
}
else if(window.innerWidth <= 1000) {
    limitSupP = 5;
}