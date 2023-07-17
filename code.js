// longest code
// let a = prompt("this is first number");
// let b = prompt("this is second number");
// let c = prompt("this is third number");

// function cheak(a,b,c){
//     if(a>=b && a>=c){
//         return a;
//     }
//     else if(b>=a && b>=c){
//         return b
//     }
//     else{
//         return c
//     }
// }
// let result = cheak(a,b,c)
// console.log(result);

// swap two element
// let a=10;
// let b=2;
//  [b,a] = [a,b]
//  console.log(a,b);

// even and odd number

// let x=11;

// if(x%2 == 0){
//   console.log("even number");
// }
// else{
//     console.log("odd number");
// }

// prime number

    let n = prompt("this is a number")
     
     if(n == 1){
     console.log("n is not prime or composite number");
     }
    else{
        for(let i =2;i<n ; i++){
            if(n/i == 0){
                var res = `${n} is not prime number`
               break;
            } 
            else{
                var res = `${n} is prime number`
            } 
        }
        console.log(res);
    }



