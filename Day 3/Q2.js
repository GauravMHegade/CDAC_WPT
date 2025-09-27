// Write a Program to use Different Array Library Functions using switch case

//in javascript arrays are dynamic in nature meaning their size isn't fixed and can grow or shrink as needed(when you add elements the size of array will be grown).
const cars = [];//when you declare array as a const then you cant use that array name to create an another array but you can change the particular value from that array using its index value
cars[0] = "M5"
cars[1] = "M4"
cars[2] = "M7"
cars[3] = "M3"

cars[1] = "M6"
console.log(cars[1])

// cars = [2];//gives error because you cant create an another array of name cars becuse its an constant
// cars[1] = "ajsg"
// console.log(cars[1])


cars.push("Audi")//add element to the end
cars.push("Toyota")
cars.unshift("Mercedes")//add element to the first
cars.unshift("Vellfire")
console.log(cars)
cars.pop()//remove the last element
console.log(cars)
cars.shift()//remove the first element
console.log(cars)
cars.splice(1,2)//remove the 2 elements from index 1
console.log(cars)
