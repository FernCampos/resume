const express = require('express')
const app = express()
const path = require('path')
const port = 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello!")
});

app.listen(port, () => {
    console.log('Listening.');
})