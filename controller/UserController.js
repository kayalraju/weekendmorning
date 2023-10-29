

const Home=(req,res)=>{
    res.render('home',{
        title:"home page"
    })
}
const About=(req,res)=>{
    res.render('about',{
        title:"about page"
    })
}
const Service=(req,res)=>{
    res.send('<h1>welcome service </h1>')
}



module.exports={
    Home,
    Service,
    About
}