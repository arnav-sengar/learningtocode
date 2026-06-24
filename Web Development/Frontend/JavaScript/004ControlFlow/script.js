/*
if else else-if
switch case
early return pattern

    baaki dono you know....let's just understand early return pattern

EARLY RETURN PATTERN :-
    suppose

    function grade(val){
        if(val<100) return 'A';
        else if(val<75) return 'B';
        else if(val<50) return 'C';
        else return 'D';
    }
    console.log(grade(45))  => A

    to prevent this scenario...we flip the conditions

    function grade(val){
        if(val<25) return 'D';
        else if(val<50) return 'C';
        else if(val<75) return 'B';
        else return 'A';
    }
    console.log(grade(45))  => C

    *directly reaches the required statement without any error
*/
