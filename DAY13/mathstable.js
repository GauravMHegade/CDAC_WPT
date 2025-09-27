const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views')); 

app.get('/', (req, res) => {
  res.render('mathstable', { result: '' }); 
});

app.post('/generate-table', (req, res) => {
 
  res.render('./mathstable.hbs', { result });  
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
