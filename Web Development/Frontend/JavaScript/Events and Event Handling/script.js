// event ka matlab h screen pe kuch action hua
// event listener ka matlab hai aapne koi action ka reaction diya

// let h1 = document.querySelector("h1");

// // element.addEventListener("event_name", function(){});

// h1.addEventListener("click", function(){
//     h1.style.color = "red";
// })

// let p = document.querySelector("p");
// p.addEventListener("dblclick", function(){
//     p.style.color = "yellow";
//     p.style.backgroundColor = "green";
// })

// // removing an eventListener
// // element.removeEventListener("event_name", reference of the exact function you gave to create the event);

// // more event listeners

// let input = document.querySelector("input");
// input.addEventListener("input", function(data){
//     console.log(data.data); 
// }
// )

// let input = document.querySelector("input");
// input.addEventListener("input",function(dets){
//     if(dets.data !== null)
//         console.log(dets.data);
//     else
//         console.log("Backspace"); 
// })

// let device = document.querySelector("select");
// let h1 = document.querySelector("h1");
// device.addEventListener("change",function(dets){
//     h1.textContent = `${dets.target.value} Device Selected`;
// });
let h1 = document.querySelector("h1");
window.addEventListener("keydown",function(dets){
    if(dets.key === " ")
        h1.textContent = "Space";
    else
        h1.textContent = dets.key;
});

// let button = document.querySelector("#btn");
// let filinp = document.querySelector("input");

// button.addEventListener("click",function(){
//     filinp.click();
// })

// filinp.addEventListener("change",function(dets){
//     let file = dets.target.files[0];
//     if(file){
//         button.textContent=file.name;
//     }
// })

    // let form = document.querySelector("form");
    // let inputs = document.querySelectorAll("input");
    // form.addEventListener("submit",function(dets){
    //     dets.preventDefault();
    //     console.log(inputs[0].value);
    // })

let div = document.querySelector("#abcd");
div.addEventListener("mouseover",function(){
    div.style.backgroundColor="yellow";
})
div.addEventListener("mouseout",function(){
    div.style.backgroundColor="purpleviolet";
})