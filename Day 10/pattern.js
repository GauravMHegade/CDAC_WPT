const input = parseInt(process.argv[2]);

if (  input < 1 || input > 5) {
  console.log("Error: Please enter a number between 1 and 5.");
//   process.exit(1); 
} else {
  for (let i = input; i > 0; i--) 
    {
    let line = '';
    for (let j = 0; j < i; j++) 
    {
      line += '* ';
    }
    console.log(line);
  }
}
