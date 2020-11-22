'use strict'
let inputs = document.querySelectorAll('input[type="radio"]');

// Opcion1
window.addEventListener("click", (event)=>{ 
    console.log(event.target);
    if(!document.getElementById("rate1").contains(event.target)){
        inputs[0].checked = true
    }
});

// Opcion2
// window.addEventListener("click", (event)=>{ 
//     console.log(event.target.value);
//     if(event.target.value ==  undefined){
//         inputs[0].checked = true
//     }
// });