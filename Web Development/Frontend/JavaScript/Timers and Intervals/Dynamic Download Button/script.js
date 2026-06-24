//setTimeout(function(){},time_in_ms);
//after n ms of time ek baar chal jaega

// setInterval(function(){},time_in_ms);
// har n ms of time ke baad chalega

//CLEAR TIMEOUT
// let timer = setTimeout(function(){
//     console.log("HEllo");
// }, 2000);

// console.log(timer);
// let h1 = document.querySelector("h1");
// let count = 10;
// let interval = setInterval(function(){
//     if(count>=1){
//         count--;
//         console.log(h1.textContent);
//     }
//     else 
//         clearInterval(interval);
// },1000);

let count = 0;
let progress = document.querySelector(".progress-bar");
let p = document.querySelector("p");
let btn = document.querySelector("#startBtn");
let h2 = document.querySelector("h2");
btn.addEventListener("click",function(){
    btn.disabled = true;
    let interval = setInterval(function(){
    if(count<=99){
        count++;
        progress.style.width = `${count}%`;
        p.textContent = `${count}%`;
    }else{
        clearInterval(interval);
        h2.textContent = "Downloaded";
    };
},20000/100);
});

