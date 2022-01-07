 // FIBONACCI PROBLEM
 
 function fibonacci(input){

  for (var i=1;i<=input;i++){
      
     if(i==1){

        var sum=0;
        var oldsum=0;
        var newsum=1; 
     }
     else{
        sum = oldsum+newsum;
        oldsum=newsum;
        newsum=sum;
     }
  }
  return sum;
  }
  
 var fibonaccinumber= fibonacci(4);
 console.log(fibonaccinumber);
  
  
  