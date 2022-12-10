require('dotenv').config();
const express = require ('express');
const app = express ();
const cors = require('cors');
const PORT = process.env.PORT || 8080;
// const warehousesRoute = require('./routes/warehousesRoute')
// const inventoryRoute = require('./routes/inventoriesRoute')

app.use(cors());
app.use(express.json());
app.use(express.static('public'));


app.get ('/', (_req, res) => {
    res.send ('Database')
});

// app.use('/warehouse', warehousesRoute)
// app.use('/inventory', inventoryRoute)

app.listen (PORT, ()=> {
    console.log(`server running `)
});