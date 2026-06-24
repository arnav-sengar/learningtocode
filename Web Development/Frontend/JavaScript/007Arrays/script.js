/*
CREATE :-

    let arr = [1,2,3,4,5];
    let arr = new Array();
------------------------------------
MODIFY :-

    let arr = [1,2,3,4,5];
    arr[2]=12;
------------------------------------
SOME COMMON METHODS :-

    1.push() - last mein ek value add kar deta h.
    2.pop() - last se ek value hata deta h.
    3.shift() - starting se ek value hata deta h.
    4.unshift() - starting mein ek value add kr deta h.
    5.splice(kis index se value hatani h,kitni value hatani h)
        eg. let arr = [1,2,3,4,5,6];
            arr.splice(2,2);  => [1,2,5,6]
    6.slice(kaha se hatana h,kaha tak hatana h)
            ye original array mein koi change nhi karta....just ek copy of the original array banata h....and use RETURN kar deta h.
    7.reverse() - array ko reverse kar deta h
    8.sort() - isme hum ek function pass karte h with
               two parameters and unhe return karte and woh kaise
               return hue h uspe depend karta h ascending sorting 
               hogi ya descending

               eg.

               let newarr = arr.sort(function(a,b){
                    return a-b; (for ascending)
                    return b-a; (for descending)    
               })
                
     9.forEach() - array ki har ek entry ke liye forEach mien diya hua function chalega and woh function jo bhi kar rha hoga woh har value ke liye ek ek baar chalega

        Eg: let arr = [1,2,3,4,5,6];
            arr.forEach(function(val){
                console.log(val+5);
            });

     AB YAHA SE JO BHI METHODS H...WOH KAHI BHI DIKHE...TOH DIMAG MEIN EK BLANK ARRAY BANA LENA

     10. map() - map sirf tab use karna h jab aapko ek naya array banana h pichle array ke data ke basis pe

        Eg:
            let arr = [1,2,3,4,5,6];
            let newArr = arr.map(function(val){
                return 12;
            })
            console.log(newArr);
            => [12,12,12,12,12,12]

            let anotherArr = arr.map(function(val){
                if(val%2==0) return val;
            })
            console.log(anotherArr);
            => [undefined,2,undefined,4,undefined,6]

      11.filter() - purane array  se kuch members naye array mein lata h and kuch ko chor deta h on a given condition.

        Eg:
            let arr = [1,2,3,4,5,6];
            let newArr = arr.filter(function(val){
                if(val%2==0) return true;
            }
            console.log(newArr);
            => [2,4,6]

      12. reduce() - ek array se ek value banana...ek bade array ko reduce karna ek single value banana

        Eg:
            let arr = [1,2,3,4,5,6];
            let ans =arr.reduce(function(accumulator,val){
                return accumulator+val;
            },0(initial_value_of_accumulator));
            console.log(ans);
            => 21

      13. find() - returns the first value or occurence from the array  that satisfies the condition given in the function of find().

      14. some() - poore array mein kya koi ek bhi aisi value h jo given condition ko satisfy karti ho...returns true or false

      15. every() - poore array mein har value woh given value satisfy karti h ya nhi..returns true or false...ek bhi value satisfy nhi karti toh false ho jata h answer
------------------------------------
DESTRUCTURING :

let arr = [1,2,3,4,5,6];

let [a,b] = arr;
console.log(a,b);
=> 1,2

let [a,b,,c] = arr;
console.log(a,b,c);
=> 1,2,4
-------------------------------------
SPREAD OPERATOR : 

let arr = [1,2,3,4,5,6,7,8];
let newArr = [...arr];

*arr ki saari values uthao and newArr mein faila(spread) kar do.
--------------------------------------
*/