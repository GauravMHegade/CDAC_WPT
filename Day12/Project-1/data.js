const express = require('express')
const users =  require('./MOCK_DATA.json')
const app = express();


app.get('/', (req, res) => {
    res.send("Hello From Express");
});

app.get('/user', (req, res) => {
    res.json(users)
});

app.get('/user/:id' , (req,res) =>
{
    const id = Number(req.params.id)
    const user = users.find(
        user => user.id === id
    )
    return res.json(user)
    
})



app.delete('/user/:id', (req, res) => {
    const id = Number(req.params.id);  // 15
    // console.log(id);
    const userIndex = users.findIndex(
        user => user.id === id
    )
    if (userIndex === -1)
        return res.status(404).send('Data not found');

    const deletedItem = users.splice(userIndex, 1);
    return res.json(user);
});


app.listen(1000)
console.log("From Start Script ");