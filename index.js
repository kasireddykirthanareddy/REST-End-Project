const express = require('express')
const app = express()
const questions =[
    {
        question:"how to install python",
        slug:"how-to-install-python",
        votes:3,
        views:10,
        tags:"python,javascript,query"
    },
    {
        question:"how to install python1",
        slug:"how-to-install-python1",
        votes:3,
        views:10,
        tags:"python1,pip,query"
    },
    {
        question:"how to install python2",
        slug:"how-to-install-python2",
        votes:3,
        views:10,
        tags:"python2,pip,query"
    }
]
const users = [
    {
        name:"abc",
        follwers:100,
        location:"hyd"
    },
    {
        name:"xyz",
        follwers:1000,
        location:"delhi"
    },
    {
        name:"mno",
        follwers:1002,
        location:"banglore"
    },
]
const tags = [
    {
        Tag : "javascript",
        Description:"javascript is case-sensitive and programming language"
    },
    {
        Tag : "React",
        Description:"React is one of the most important javascript liabraries"
    }
]
app.get('/',(req,res)=>{
    res.send("Home")

})
app.get('/questions',(req,res)=>{

    res.send(questions)

})
app.get('/questions/:slug',(req,res)=>{
    console.log(req.params.slug)
    const slug =req.params.slug
    questions.map(Obj=>{
        if (Obj.slug === slug){
            res.send(Obj)

        }
        
    })
    res.send("Slug")

})
app.get('/users',(req,res)=>{
    res.send(users)

})
app.get('/tags',(req,res)=>{
    res.send(tags)

})
app.get('/jobs/companies',(req,res)=>{
    res.send("Companies")

})



app.listen(3000,()=>{
    console.log("listening...")
})