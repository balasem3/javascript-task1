// FIZZBUZZ PROBLEM
function fizzbuzzarray(n){
 
    var answer=[];
    
    for(var i=0;i<=n;i++){
    
        if (i%3===0 && i%5===0){
            answer[i]="FizzBuzz"
        }
        else if(i%3===0){
            answer[i]="Fizz"
        }
        else if(i%5===0){
            answer[i]="Buzz"
        }
        else{
            answer[i]="" + i + "";
        }
    
    }
        console.log(answer);

}

fizzbuzzarray(20);



