// this keyword special keyword hai, kyunki jaise ki baaki saare keywords ki value ya nature  same rehta h this ki value ya nature badal jata h is baat se ki aap use kaha youse kar rhe ho

// global scope
console.log(this);
// output: window
// window h pradhan mantri - supreme thing

// function scope
function abcd(){
    console.log(this);
}
abcd();
// output: window

// method scope(ek aisa function jo object ke andar ho..use method bolte h)
let obj = {
    name: "arnav",
    age: 5,
    sayName: function(){
        console.log(this);
        console.log(this.age);
        console.log(this.name);
    }
};
obj.sayName();
// method ke andar this ki value ..object ho jati h...toh we can treat it like an object...jaise ki...console.log(this.name);....ye output dega.....arnav


// event handler
document.querySelector("h1").addEventListener("click",function(){
    console.log(this);
    this.style.color = "red";
});
// event handler mein this hamesha wahi banda hoga jispe EventListener laga h...toh is case mein...h1 will becomes this...so we can write as...this.style.color = "red";

// this ki value
// -------------------------
// global - window
// function - window
// method with es5 fnc - object
// method with es6 arrow fnc - window
// es5 function inside es5 method - window
// arrow function inside es5 method - object
// event handler - element
// class - blank object


//================================================
// manual binding : bind, call and apply
// function ko call karte time aap set kar sakte ho ki uski this ki value kya hogi


//call - manually sets the value of this while calling the fucntion
let obje = {
    name: "harsh",
    age: 15
};
function defg(){
    console.log(this.name);
}//abhi yaha pe this ki value is window

defg.call(obje);


// apply - same as call...but isme...parameter passing is different....first parameter is the object jise aap this banana chahte ho...and rest all parameters in the form of an array[]....even if called functions mein arguments alag alag likhe ho...apply array se ek ek value extract karke pass karta jaega
// syntax : fn.apply(thisValue, [arg1, arg2, arg3])
function abcde(a, b, c) {
    console.log(this.name, a, b, c);
}

abcde.apply(obje, [1, 2, 3]);


// bind - It does NOT execute the function immediately
// It returns a new function with this fixed
// syntax : let newFn = fn.bind(thisValue, arg1, arg2...)

let objt = {
    name: "harsh"
};
function greet() {
    console.log(this.name);
}
let newFunc = greet.bind(objt);
newFunc(); // harsh