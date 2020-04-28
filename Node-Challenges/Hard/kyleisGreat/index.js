let express = require('express')

let app = express()

let data = require('./public/employees.json')

app.get('/test', function(req,res){

    res.send("hello world")
})

app.get('/employees',(req,res) =>{

    if(!data){
        res.status(404).send(`Couldnt find the employees`)
    }

    res.send(data)
})


app.get('/employees/:id', function(req,res){

    const sData = data.employees.find(function(student){
        console.log(student.id)

        return parseInt(req.params.id) === student.id
    })

    if(!sData){
        res.status(404).send(`Couldnt find the student id`)
    }

    res.send(sData)
})




const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
})