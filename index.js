const express = require('express')
const app = express()
const path = require('path')
const port = 3000;
const layouts = require('express-ejs-layouts')

// set the view engine
app.set('view engine', 'ejs');

// set the layout
app.use(express.static("public"));
app.use(layouts);

// Use JSON
app.use(express.urlencoded({extended:true}));
app.use(express.json());

require("./routes/mainRoutes")(app);

app.listen(port, () => {
    console.log('Listening.');
})