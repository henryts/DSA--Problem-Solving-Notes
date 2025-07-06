//problem to find the sum of digits


const DigitSum = function (n){
  if(n==0) return 0;
  
  return (n%10) + DigitSum(Math.floor(n/10))
    
}

console.log(DigitSum(999));