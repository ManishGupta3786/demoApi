const express = require('express');
const app = express();
const dbConnection = require('./dbConfig/dbConnection');
const userRouter = require('./routes/userRoute');
const cors = require('cors');
dbConnection();

app.use(cors({origin:"http://localhost:3000"}))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/demoApi',userRouter);

app.listen(5000,()=>{
    console.log("server is running at port : 5000");
})

