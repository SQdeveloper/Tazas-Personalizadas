const sliderMove  = document.querySelector(".sliderMove");
const buttonArrow = document.querySelectorAll(".slider button");
let number        = 0, limitSup = 2, divisor = 3;

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
    if(number === limitSup) {
        buttonArrow[1].style.visibility = "hidden";
    }
    buttonArrow[0].style.visibility = "visible";
});

function move() {
    sliderMove.style.transform = `translateX(-${100/divisor * number}%)`;
}

if(window.innerWidth <= 720) {
    limitSup = 5;
    divisor  = 6;
}