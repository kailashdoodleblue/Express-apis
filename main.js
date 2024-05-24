let express = require('express')
let sql=require('mysql')
const app = express()
let con=sql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'sampledb'
})

con.connect((err)=>{
    if(err) throw err;
    console.log("Database connected")
})

app.get ('/students',(req,res)=>{
    con.query('select * from student',(err,data)=>{
        res.send(JSON.stringify(data))
    })
})

app.get('/student/:id',(req,res)=>{
    const {id} = req.params
    con.query(`select * from student where ID = ?`,[id],(err,data1)=>{
        res.send(JSON.stringify(data1))
    })

})
app.listen(3000)