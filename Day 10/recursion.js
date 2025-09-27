
// 3) Write a recursive function in Node.js to print factorial of number 

// number accept by command line Args

function factorial(fact) {

    if (fact == 0 || fact == 1) {
        return 1;
    } else {
        return fact * factorial(fact - 1);
    }
}
let num = parseInt(process.argv[2]);
console.log("Enter a Number" + num);
let op = factorial(num);
console.log(op)