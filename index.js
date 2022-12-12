require('dotenv').config();
const express = require ('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8080;
const userRoute = require('./routes/userRoute')
const productsRoute = require('./routes/productsRoute')
const paymentRoute = require('./routes/paymentRoute')
const orderRoute = require('./routes/orderRoute')
const orderProductRoute = require('./routes/orderProductRoute')

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/user', userRoute)
app.use('/products', productsRoute)
app.use('/payment', paymentRoute)
app.use('/order', orderRoute)
app.use('/orderproduct', orderProductRoute)

app.get ('/', (_req, res) => {
    res.send ('Database')
});

app.listen (PORT, ()=> {
    console.log(`server running `)
});