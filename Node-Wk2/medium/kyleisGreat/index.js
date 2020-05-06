let express = require('express')

let app = express()

let data = require('./public/employees.json')

app.get('/test', function(req,res){

    res.send("hello world")
})

app.get('/api/employees',(req,res) =>{

    if(!data){
        res.status(404).send(`Couldnt find the employees`)
    }

    res.send(data)
})


app.get('/api/employees/:id', function(req,res){
    const employeeID = data.employees.find(c => c.id === parseInt(req.params.id));
    if(!employeeID){
        res.status(404).send(`Couldnt find the employee with this id`)
    }else{
    res.send(employeeID)}
})




const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
})