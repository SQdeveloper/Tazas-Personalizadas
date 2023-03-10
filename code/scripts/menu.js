const menu         = document.querySelector(".menu");
const buttonX      = document.querySelector(".menu button");
const buttonOpen   = document.querySelector("header .top button");
const content      = document.querySelector(".menu > div");
const buttonToggle = document.querySelector("header button.toggle");

buttonOpen.addEventListener("click", ()=>{
    menu.classList.add("active");
    content.classList.add("active");
});

buttonX.addEventListener("click", ()=>{
    content.classList.remove("active");
    setTimeout(()=>{
        menu.classList.remove("active");
    },  600);
});

buttonToggle.addEventListener("click", ()=>{
    menu.classList.add("active");
    content.classList.add("active");
});