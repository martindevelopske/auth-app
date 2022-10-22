const express =require('express')
const cors=require('cors');
const cookieParser=require('cookie-parser')
const authRoutes = require('./Routes/authRoutes');
const bodyParser=require('body-parser')
const ConnectDB = require('./DB/connectDB');

const app= express();

//middlewares
app.use(express.json());
app.use(bodyParser.json())
app.use('/', authRoutes);
app.use(cors(
    {
        origin: ["http://localhost:3000"],
        methods:["GET", "POST"],
        credentials: true,
        
    }
));
app.use(cookieParser())

//app.use(ConnectDB);

//get route
// app.get('/', (req,res,next)=>{
//     res.send('hello')
// })

app.listen(3001,()=>console.log("app is running...."));