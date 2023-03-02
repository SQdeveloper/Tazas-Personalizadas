const buttonQuestion = document.querySelectorAll(".questions .question");
const parrafo        = document.querySelectorAll(".questions p");
const img            = document.querySelectorAll(".questions img");
let flag = [true,true,true,true,true,true];

buttonQuestion.forEach((button, index)=>{
    /********* Evento click en las preguntas */
    button.addEventListener("click", ()=>{
        /****** Desactivamos a las preguntas que no se hacen click */
        parrafo.forEach((pr, i)=>{
            if(index !== i) pr.classList.remove("active");            
        });
       
        /***** Activamos la pregunta a la que se le hizo click */
        parrafo[index].classList.toggle("active");

        /***** Cambiamos la img de todas la preguntas */
        img.forEach(im=>{
            im.src = "../rg/svg/chevron-down (1).svg";
        });

        /***** Reiniciamos las flags */
        flag.forEach((fg, i)=>{
            if(i !== index) flag[i] = true;
        });

        if(flag[index] == true) {
            img[index].src = "../rg/svg/chevron-up.svg";
            flag[index] = false; 
        }
        else {
            img[index].src = "../rg/svg/chevron-down (1).svg";
            flag[index] = true; 
        }
    });
})