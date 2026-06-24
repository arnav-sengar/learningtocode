let lis = document.querySelectorAll("li");
lis.forEach(function(val){
    console.log(val.textContent);
});
//another method
for(let i = 0;i < lis.length; i++)
{
    console.log(lis[i].textContent);
}
//--------------------------------------------
let p = document.querySelector("p");

p.innerHTML = "<b>Updated</b> by Javascript";

let img = document.querySelector("img");
console.log(img.getAttribute("src"));


img.setAttribute("src","https://plus.unsplash.com/premium_photo-1722584996622-46f592165128?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8")

let div = document.querySelector("div");
div.setAttribute("title","just a paragraph");

let button = document.querySelector("button");
button.removeAttribute("disabled");

let n = document.createElement("li");
n.textContent = "Arnav";

let ul = document.querySelector("ul");
ul.append(n);

let image = document.createElement("img");
image.setAttribute("src","https://images.unsplash.com/photo-1773311400657-29c0891cc045?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")

div.prepend(image);