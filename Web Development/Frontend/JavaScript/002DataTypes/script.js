/*
Data Types :- Data ke types

Primitive :- aisi saari values jinko copy karne par tumhe ek real copy mil jaye
// string, number, boolean, null, undefined, symbol, bigint

Reference :- inko copy karne par real copy nhi milegi but aapko reference milega parent ka
// arrays, objects, functions
    []        {}          ()

{
    let a = 12;
    let b = a;

    console.log(b); => 12
    (a ka apna 12 h ...b ka apna 12 h....kisi ek ke 12 mein change karne se dusre ke 12 par fark nhi padega)

    ** tumhari gaadi tumhari gaadi ....meri gaadi meri apni gaadi
}

{
    let a = [1,2,3];
    let b = a;

    console.log(b) => [1,2,3]

    but but...
    b.pop();

    console.log(b); => [1,2]
    console.log(a); => [1,2](a ki value bhi change ho gyi)

    ** meri gaadi tumhari gaadi bhi h...
}
-----------------------------------
1.string :- anything written inside
'' - single quotes          
"" - double quotes
`` - back ticks

2.number :- any type(decimal, integer, fractional) sab number hi hota h.

3.boolean :- true or false values

4.null :- aapne jaanboojhkar koi value nhi di h...toh usko kuch time ke liye null rakh rahe ho

5.undefined :- aapne ek variable banaya and use value nhi di...toh jo value use default mili...woh hoti h undefined

6.symbol :- unique immutable value create karta h

    future mein hum kuch libraries use karenge....un libraries mein kayi baar kuch fields hoti h jinse similar hum bhi bana dete h...aur galti se hummari banayi hui fields original fields ko change kar deti h

    is cheez se bachne ke liye we use symbol

    let u1 = Symbol("uid");
    let u2 = Symbol("uid");

    although they both look the same but
    u1 == u2 => false

7.bigint :- to prevent precision on very big integers

    number.MAX_SAFE_INTEGER

    let a = 193749834938794388943n; (just place a n right after the big number)
            OR
    let a = bigint(number);

---------------------------
DYNAMIC TYPING :- 
    aap data ko change kar sakte ho kyunki yaha pe dynamic data types h

    let a = 12;
    a = true;
    a = "arnav";
    .
    .
    .

    and there won't be a problem
----------------------------
TYPEOF QUIRKS :-

    typeof(12); => number
    typeof("harsh") => string

    typeof(null) => object (weird bug in js)

    typeof(NaN) => number

    NaN === NaN => false
-----------------------------
TYPE COERCION :-

    concept h jisme aapka ek type automatically convert ho jaega

    "5"+1  => "51"(+ add bhi karta h/concatenation bhi karta h according to need)

    "5"-1  => 4(- keval subtract hi karta h)
------------------------------
TRUTHY AND FALSY VALUES :-

    JS mein har value ko truth or false mein divide kar rakha h

    falsy values :
        0 false "" null undefined NaN document.all

    rest all are truthy 

    how to check nature -
        !!(value)
-------------------------------

*/
