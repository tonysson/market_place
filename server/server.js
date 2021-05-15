const express = require('express');
const {readdirSync} = require('fs');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose')
require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGO_URL ,{
    useNewUrlParser: true,
    useUnifiedTopology: true ,
    useCreateIndex:true ,
    useFindAndModify: false
}).then(() =>console.log("DB connected successfully")).catch((error) => console.log("Something wend wrong" , error))

//Middleware
app.use(cors())
app.use(morgan('dev'));
app.use(express.json())



//Routes middleware
readdirSync('./routes').map(route => app.use('/api' , require(`./routes/${route}`)))

const port = process.env.PORT || 8000
app.listen(port , () => console.log(`server running on port ${port}`))