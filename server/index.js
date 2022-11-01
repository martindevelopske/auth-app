const express =require('express');
const app= express();
const cors=require('cors');
const cookieParser=require('cookie-parser')
const authRoutes = require('./Routes/AuthRoutes');
const bodyParser=require('body-parser')
const ConnectDB = require('./DB/connectDB');


const corsOptios={
    origin: ["http://localhost:3000"],
    methods: ["POST","GET"],
    credentials: true,
}
//middlewares
app.use(cors(corsOptios));
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/", authRoutes);


app.post('/', (req,res)=>console.log('home '));

//start
const start= async()=>{
    await ConnectDB();
    app.listen(3001,()=>console.log("app is running...."));
}
start();
