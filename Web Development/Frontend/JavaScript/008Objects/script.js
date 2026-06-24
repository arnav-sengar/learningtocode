/*
saare elements chhahiye - we use arrays
ek element ki saari details chahiye - we use objects
----------------------
syntax :

    let obj0 = {}; //blank object
    let obj = {
        name : "arnav",
        age : 21,
        food : "daal chawal"
    };
------------------------
accessing the object : 
    1. when you directly write keys-

        obj.name => for accessing value of "name" key in the object obj

    2. when the key is stored in some variable- 

        let nm = "name";
        obj[nm] => isme square brackets mein woh variable likhte h jisme  key ki value stored h.
-------------------------
NESTING IN OBJECTS :

let obj = {
    name : "arnav",
    address : {
        city : "Kanpur",
        pin : 208011,
        location : {
           lat : 23.1,
           long : 77.12 
        }
    }
};
*object ke andar object ke andar object
--------------------------
DEEP ACCESS IN OBJECTS :

obj.address.location.long

*suppose location naam ki field exist nhi karti hoti toh aapko error mil jata ...ab ise handle karne ke liye we use : 
    OPTIONAL CHAINING(at last)
----------------------------
DESTRUCTURING IN  OBJECTS :

    let {lat,long} = obj.address.locations
    //waha tak pahuncha do jaha se ye do key ki values nikali jaa sakti  h....and ye apne aap dekh lega lat and lang ki values inside locations

    // now if you check the value of lat and long as a variable toh woh aapko saved milengi

    console.log(lat) => 23.1
    console.log(long) => 77.12

    **suppose koi key aise ho : "first-name"
    ab is method se ise destructure nhi kar paenge...kyunki {first-name} aise allowed nhi hota h...

    //solution : 
        let {"first-name":firstname} = obj;

        => this is like...bhaiya obj mein jao....and "first-name" wali key ko nikal kar lao....fir uski value save karne ke liye jab variable banana....toh uska naam "firstname" rakhna....
-----------------------------
LOOPING IN OBJECTS :
1.for-in

    let obj = {
        name : "arnav",
        age : 21,
        github : "@arnav-sengar"
    }
    
    for(let kee in obj){
        console.log(obj[kee]);
    }
    **square brackets isliye use kiye h kyunki kee ek loop variable h jo original keys of obj ko store kar rha h ....and jab variable mein key stored hoti h toh we use this representation to access object values

2. Object.keys(object_name):

    let kees = Object.keys(obj);

    console.log(kees); => ['name','age','github']
    **Object.keys(object_name) us particulare objects ki saare keys nikal kar ek array mein store kar deta h and us array ko return kar deta h...isliye kees mein ek array store ho gya

3. Object.entries(object_name):   

    let entrees = Object.entries(obj);

    console.log(entrees); => [['name','arnav'],['age','21'],['github','arnav-sengar']]

    **toh ye basically ek array of arrays banata h..and each array will contain one one key-value pair inside  it in the form of string
--------------------------
COPYING OBJECTS:

1.spread operator(...):
    let obj2 = {...obj}; 
    **does not work in nested objects

2.Object.assign({},object_to_be_copied) :

    let obj2 = Object.assign({},obj1);
    //obj2 becomes an exact copy of obj1...works mostly like spread operator

    **IF BLANK OBJECT DENE KI JAGAH WE WRITE A KEY-VALUE  IN THE {} THEN THINGS CHANGE

    let obj2 = Object.assign({price : 1000},obj)
    //now obj2 will have all the values of obj1 plus an additional entry of price : 1000

    //so obj2 will look like : 
        {
        name : "arnav",
        age : 21,
        github : "@arnav-sengar",
        price : 1000
    }
    
3.Deep Copy(JSON)

    jab nested object hota h toh agar use spread/assign se copy karenge toh galat copy aaegi....normal key-value pairs toh normally copy honge...par nested wale part ki reference copy jaegi

    // toh nested objects ko copy karne ke liye hum pehle use string mein convert kar dete h using JSON.stringify....fir copy karte time use string ko parse kar lete h..using JSON.parse

    Eg: 
                let obj = {
                    name : "arnav",
                    address : {
                        city : "Kanpur",
                        pin : 208011,
                        location : {
                        lat : 23.1,
                        long : 77.12 
                        }
                    }
                };

                let obj2 = JSON.parse(JSON.stringify(obj));

                //this will create  a good clean deep copy of the obj into obj2 with all the nested parts too
----------------------------
OPTIONAL CHAINING :

    obj.address.city.locality;

    *suppose city naaam ki field na ho...tab toh error  aa jaega if use access karne ka try karenge

    *then we use optional chaining
        obj?.address?.city?.locality

    *ab ye fields hui toh result mil jaega ...nahi hui toh undefined aa jaega ...error nhi aaega
------------------------------
*/
