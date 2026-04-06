let P = 10000;  
let r = 0.10;    
let n = 1;       
let t = 3;       

let A = P * Math.pow((1 + r / n), n * t);

let CI = A - P;

console.log("The compound interest after " + t + " years is: " + CI);