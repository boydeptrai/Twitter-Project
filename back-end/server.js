//dotenv
require('dotenv').config();

// connect DB
const {connectDB} = require('./configs/db');
connectDB();


const express = require('express');
const cors = require('cors');
const authRoute = require('./routes/authRoute');
const {register} = require('./controllers/authController');

const app = express();
// cors
app.use(cors());
// Body parser
app.use(express());

app.use('/api/v1/auth',authRoute);

const port = process.env.APP_PORT;
app.listen(port,() =>{
   console.log(`'Server is running on port ${port}'`)
})