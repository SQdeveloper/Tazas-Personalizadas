const headertop = document.querySelector("header .top");

window.addEventListener("scroll", ()=>{
    if(this.scrollY > 0) {
        headertop.style.transform = "none";
    }
    else if( this.scrollY == 0) {
        headertop.style.transform = "translateY(-100%)";
    }
});