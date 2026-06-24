/*
FUNCTIONS :-

    1.Method
    
    function function_name(){
        code;
    }
    
    ab ye function tabhi call hoga jab koi function call karega and uske andar ka code run ho jaega

    2.Method

    let fnc = function(){
        console.log("hehehehe");
    }
    
    agar variable mein function ko save kiya toh use function expression kehte h
    
    *variable mein daal sakte ek function ko

    3.Method(fat arrow function)

    let fnc = ()=>{
        code;
    }
---------------------------------
PARAMETERS AND ARGUMENTS :-

    function dance(val){
        console.log(`${val} naach rha h`);
    }
    dance("ghoda");
    dance("cheel");

    ab yaha par.....

    val jo function ke andar likha h...woh h parameters

    ghoda and cheel are called arguments
-----------------------------------
DEFAULT PARAMETERS :-

    function add(v1=0,v2=0)
    {
        console.log(v1+v2);
    }

    add(1,3);  => 4
    add();   => 0(jab function call mein koi value nhi pass ki gyi h...toh jo humne default value define ki h woh use hogi)
----------------------------------
REST AND SPREAD OPERATOR :-

    function abcd(...val) {
        console.log(val);
    }
    abcd(1,2,3,4,5,6,7,8,9);

    jab argument kayi saare ho toh hume utne hi parameter bhi banane padenge..

    isse bachne ke liye we use rest operator(...) ka use karte h....
    function ke parameter space mein - rest
    arrays and objects ke sath ues ho - spread

    function abcd(a,b,c,...val){
        console.log(a,b,c,val);
    }
    abcd(1,2,3,4,5,6);  => 1 2 3 in a b c respectively
                           4 5 6 in an array named val.

-------------------------------                
FIRST CLASS FUNCTIONS :-

    functions ko same value ki tarah treat kar sakte h..

    unko variables mein save kar sakte....function mein pass kar sakte...

    function abcd(val){
        val();
    }
    abcd(function(){
        console.log("Hello World");
    });

    **bas jab function ko as an argument pass karenge...toh function likhenge bas...usko naam nhi denge
--------------------------------
PURE AND IMPURE FUNCTIONS :-

    ek aisa function jo bahar ki value ko na badle...woh h pure function

    jo bahar ki value ko badal de...woh h impure function
---------------------------------
CLOSURES :-

    ek function jo return kare ek aur function aur return hone wala function hamesha use karega parent function ka koi variable.

    function abcd(){
        let a = 12;
        return function(){
            console.log(a);
        }
    }
----------------------------------
LEXICAL SCOPING :-

    function abcd(){
        let a = 12;
        function defg(){
            let b = 15;
            function ijkl(){
                let c = 13;
            }
        }
    }
    ek variable ki physical position par depend karta h uska scope kya hoga
-----------------------------------
IIFE(IMMEDIATELY INVOKED FUNCTION EXPRESSION) :-

    syntax :

    (function(){
        console.log("hello world");
    })();


*/
//-----------------------------------------------
//Let's solve some function practice questions :

// 1.
    function multiply(a,b){
        console.log(a*b);
    }

    //the fat arrow representation of this function will be - 

    let result = (a,b) => {
        console.log(a*b);
    }

    multiply(5,10);
    result(5,10);

// 2.
    function abcd(){
        return;
    }
    console.log(abcd());  // output : undefined

// 3.
    function xyz(val)
    {
        val();
    }
    xyz(function(){
        console.log("hello world"); 
    })