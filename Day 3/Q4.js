// write a function to add 3 numbers and print the values
function add(a, b, c){//normal functions
    let result = a+b+c;
    console.log(result)
}
add(2,2,3)

let s = (a,b,c) => a+b+c//lambda functions/ anonymous function
console.log(s(2,3,4))


let result = s(2,3,4)
console.log(result)
