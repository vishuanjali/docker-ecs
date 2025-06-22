const express = require('express');

const app = express();

const PORT = 3000;
// app.use((req,res)=>{
//     console.log("request received");
   // res.send("hello world");
//     res.send("<h1>fruites</h1> <ul><li>apple</li> <li> orange</li></ul>")
    
// })
app.get("/",(req,res)=>{
    res.send("welcome to home page")
})
app.get("/auhor",(req,res)=>{
    res.send("Anjali rathore")
})
app.get("/anjali",(req,res)=>{
    res.send("hello from anjali the devops and full stack engineer")
})
app.get("/vishal",(req,res)=>{
    res.send("hello from vishal rathore the multi talentes person")
})
app.post("/",(req,res)=>{
    res.send("this is a post request")
})

// app.get("/:username/:id",(req,res)=>{
//     //console.log(req.params);;
//     let{username,id}=req.params
//     let htmlstr=`<h1>hello i am root user @${username} and my id is ${id}</h1>`
//   res.send(htmlstr)
// })
// app.get("/search",(req,res)=>{
//     //console.log(req.query);
//     let{q}=req.query
//     if(!q){
//         res.send(`<h1> quary does not exist</h1>`)
//     }
//     res.send(`these are the search result for the ${q}`)
// })
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});