// declare function calculate(...a) 
// 	and display addition of data 
// 	display only odd numbers from given data 
//   call calculate function with multiple parameters  
function calculate(...a){

    let sum = 0;
	for (let i = 0; i < a.length; i++) {
		sum +=a[i]
		if ((a[i] %2) != 0) {
			console.log("Odd Numbers are "+a[i])
		}
		
	}
	console.log(sum)
}
calculate(2,3,4,5)
calculate(2,3,4,5,6,7,8,9,0)
calculate(2,3,4,5,6,7,8,9,0,32,54,45,345,345,56,45,6456)