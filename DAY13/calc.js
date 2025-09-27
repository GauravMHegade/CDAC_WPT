const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views')); 

app.get('/', (req, res) => {
  res.render('calc', { result: '' }); 
});

app.post('/docalculation', (req, res) => {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  const result = num1 + num2; 
  res.render('./calc.hbs', { result });  
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
