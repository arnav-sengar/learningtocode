/*
-----------------------------
ARITHMETIC :-

    + - / * % ** 

    2 + 2 = 5          normal addition
    2 + "2" = '22'     concatenation

    2 - 2 = 0
    "5" - 2 = 3     can only perform subtraction

    12/6 = 2
    12*5 = 60

    12%5 = 2        returns the remainder

    2**3 = 8        power operator
--------------------------------
COMPARISON :-

    = == === != !== >= <= > <

    = assignment operator

    == compare karta h...but type nhi check karta...bas dekhta value same h ya nhi
    12 == 13  => false
    12 == "12"  => true(only checks value..not type)

    === type ke sath compare karta h
    12 === "12"  => false

    != "kya ye dono barabar nhi h kya"(not strict)
    12 != 13  => true
    12 != "12"  => false

    !== "kya ye dono barabar nhi h kya including type"(strict)
    12 !== "12"  => true
----------------------------------
LOGICAL :- 

    && \\ !

    &&(and) - dono true h toh hi true aaega

    \\(or) - ek bhi true h toh true aaega

    !(not) - ulta kar deta h
-----------------------------------
UNARY :- 

    + - ! typeof ++ --

    +/- -> koi valid string h ..use number mein convert karna h toh use this
        +"5" => 5
        +"-2" => -2
        -"5" => 5
        -"-2" => 2
-------------------------------------
TERNARY :-

    ?:
    condition ? true hui ka code : false hui ka code
-------------------------------------
INSTANCEOF :-

    "kya usme uska khoon h yaa nhi"
    only works with reference values(arrays,object,functions)
    
    let a = [];
    a instanceof Array => true

    let a = 12;
    a instanceof Number => false(does not work with primitives)
--------------------------------------
*/