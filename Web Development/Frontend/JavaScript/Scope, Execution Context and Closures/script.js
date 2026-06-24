// scope -- aap apne created variables and functions kaha tak use kar sakte h

// function abcd(){
//     var a = 12;
// }

// console.log(a);
// this will give error --
// Uncaught ReferenceError: a is not defined

// Types :
// function scope : function ke andar hi youse ho sakta h
// global scope : poore code mein kahi bhi use ho sakte h
// block scope : {} curly braces mein hi use ho sakte h

// agar aapka code(part of code) kisi bhi braces ke andar nhi h toh aapka code global scoped h fir

//================================================

// Execution contex -
// js sabse pehle jaise hi aapka function dekhta h ...sabse pehle js banata h execution context, ye ek process h jo ki do different phases mein chalta h --
// memory phase
// execution phase

// function(){
// var a = 12;
// let b = 12;
// let c = 35;

// ...
// ...
//  }

//=================================================

// Lexical Scoping --
// js follows LS
// aap kaha par physically available ho ye poori tareeke se decide karta h ki aap kya access kar paoge

//Eg :
// function abcd(){
//     let a = 12;
//     function defg(){
//         console.log(a);
//     }
// }
// output : 12
// reason : since a is lexically scoped in abcd and defg is also present inside abcd hence defg is able to access the  variable a too.

// Dynamic Scoping --
// kaha se call kar rhe ho ..uspe depend karega ki value kya milegi

//==================================================

// closures : ye hote h functions jo ki kisi function ko return kar rhe ho...and returning function use kare parent function ka koi variable

// fayda nuksaan --
// private variables
// function countforme(){
//     let count = 0;
//     return function(){
//         count++;
//         console.log(c);
//     }
// }
// global pollution control

// ye sach h ki jab koi function khatam hota h..toh uski memory space and variable khatam ho jate h ....par par par....agar woh function ek closure h....toh us function and uske variables ka ek backlink banaya jata h and uska naam hota h -- [[environment]].

//==================================================

// toaster
function createToaster(config) {
  return function (str) {
    let div = document.createElement("div");
    div.textContent = str;
    div.className = `inline-block ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-3 rounded shadow-lg pointer-events-none`;

    document.querySelector(".parent").appendChild(div);

    if (config.positionX !== "left" || positionY !== "top") {
      document.querySelector(".parent").className +=
        ` ${config.positionX === "right" ? " right-5" : " left-5"} ${config.positionY === "bottom" ? " bottom-5" : " top-5"}`;
    }
    setTimeout(() => {
      document.querySelector(".parent").removeChild(div);
    }, config.duration * 1000);
  };
}

let toaster = createToaster({
  positionX: "right",
  positionY: "bottom",
  theme: "light",
  duration: 3,
});
toaster("Download Done");
setTimeout(() => {
  toaster("Harsh accepted your request");
}, 2000);

setTimeout(() => {
  toaster("Rupesh send you a message");
}, 1500);
