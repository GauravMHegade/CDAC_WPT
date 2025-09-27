function largestElement(arr) {
    let largestNum = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largestNum) {
            largestNum = arr[i];
        }
    }
    return largestNum
}
const num1 = [100, 4, 34, 87, 99]
const result = largestElement(num1)
console.log("Largest element is " + result)



let maxelement = num1[0]
num1.forEach(element => {
    if (element > maxelement) {
        maxelement = element
    }
});
console.log(maxelement)

function find_max(arr){
    arr.sort((a,b) => a-b) 
    return arr[arr.length-1]
}

console.log(find_max(num1))