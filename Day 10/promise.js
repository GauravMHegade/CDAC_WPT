function multiply(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num1 > 0 && num2 > 0) {
            resolve(num1 * num2)
        }
        else {
            reject('Both numbers must be positive')
        }
    })
}
const num1 = parseFloat(process.argv[2]);
const num2 = parseFloat(process.argv[3]);

multiply(num1, num2)
    .then(result => {
        console.log(`Multiplication result: ${result}`);
    })
    .catch(error => {
        console.error(`Error: ${error}`);
    });

