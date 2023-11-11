const express=require('express')
const ejs=require('ejs')
const path=require('path')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')

const app=express()

app.set("view engine", 'ejs')
app.set('views','views')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/uploads',express.static('uploads'))
app.use(express.static(path.join(__dirname,'public')))

// const UserRouter=require('./router/userRoute')
// app.use(UserRouter)
//Api Route
const ApiRoute=require('./router/apiRoute');
app.use('/api',ApiRoute)

//user Home Route
const HomeRoute=require('./router/userRoute/HomeRoute')
app.use(HomeRoute)

const PORT=9000
const dbDriver="mongodb+srv://pradiptajana1234:aMRivYahrnz0mDEO@cluster0.jlctodt.mongodb.net/crud"
mongoose.connect(dbDriver,{useNewUrlParser:true,useUnifiedTopology:true})
.then(result=>{

    app.listen(PORT,()=>{
        console.log(`server running port : http://localhost:${PORT}`);
        console.log(`Db connected successfully`);
    })
}).catch(error=>{
    console.log(error);
})

