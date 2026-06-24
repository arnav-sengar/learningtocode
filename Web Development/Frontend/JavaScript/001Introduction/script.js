/* words vs keywords
--------------------
js mein aise words jinse kuch ho sakta h..woh sab js ke keywords h 
--------------------
Variables - named memmory locations that hold a value.
------------------
Types - 1.var(ES5)
        2.let
        3.const
------------------------
VAR :- 

var userName = "Arnav"; (poore program mein exist karega...start se lekar end tak)

var a;
var a = 12;
a = 12; (not appreciated)

FEATURES :- 
1.Window mein add hota h
2.Function scoped hota h
3.Redeclare kar sakte ho(same name se) and error nhi aaega
-------------------------
CONST :-

const dulha = "lab";
const dulhan = "labby";

FEATURES :-
1.Reinitialize nhi kar sakte
2.Declaration ke time pe hi initialize karna hota h.
---------------------------
DECLARATION AND INITIALIZATION :-

var a;  declare kiya h
var a = 12;  declare kiya and initialize kar diya
a = 13; reinitialize kiya h
-----------------------------
SCOPE :-
        (global, block, functional

        var = 12; [Global scoped]

        {
                var b = 14;(but var is functional scoped...toh is block ko respect nhi karega)

                let c = 12;(let block scoped hota h...toh is c ka scope isi block mein h)
        }
--------------------------------
REASSIGNMENT AND REDECLARATION :-

var a = 12; 
a = 23; reassign kiya

var a = 14;
var a = 23; redeclare kiya....only possible with var...let mein error aata h
--------------------------------
TEMPORAL DEAD ZONE :-

utna area jitne mein js ko pata toh h ki variable exist karta h...par woh aapko value nhi de sakta

{
        console.log(a);   => Cannot access a before initialization.

        let a = 12;
}
{
        console.log(a);  => a is not defined
}

TDZ :-  let and const ka hota h bas...var ka nhi...

{
        console.log(a);  => undefined(due to hoisting)

        var a = 12;
}
---------------------------------
HOISTING :-

ek variable ko jab js mein banate h toh woh variable 2 hisso mein toot jata h and uska declare part upar chala jata h and uska initialization part neeche reh jata h

{
     var a = 12;   

     ye toot jata h like...

     var a = undefined; (ye part ....top of the code pe chala jata h.....and is concept ko bolte h ...hoisting)
     a = 12;
}

{
        var, let, const teeno hoist hote h

        var -> hoist -> undefined
        let -> hoist -> X(cannot access before initialization)
        const -> hoist -> X(cannot  access before initialization)
}
-----------------------------------


*/  