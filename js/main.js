'use strict'
let inputs = document.querySelectorAll('.input');
window.addEventListener("click", (event)=>{ 
    console.log(event.target.value);
    if(event.target.value ==  undefined){
        inputs[0].checked = true
    }
});