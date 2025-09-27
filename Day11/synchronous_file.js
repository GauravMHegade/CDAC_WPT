const f = require('fs');

const data = f.writeFileSync('sample2.txt','Synchronous File')
console.log('1.Writing to file')
console.log(data)
console.log('2. Starting sync read...');
f.readFileSync('sample2.txt', 'utf8');
console.log('3. File contents:', data);
console.log('4. Done reading file');