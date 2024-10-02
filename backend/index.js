const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to Mongoose'))
.catch((error) => console.error('Error:', error));


app.use(express.json());

app.use(cors(
    {
        origin:"*",
    }
));

app.listen(8000, ()=>{
    console.log("Backend is running");
});



module.exports = app;
