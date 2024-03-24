const express = require('express');
const app = express()

app.get('/fds', (req, res)=>{
    res.json('FDSSSSSSSSSSSS!!')
    console.log('foi o fds')
})



app.listen(3030, ()=>{
    console.log('servidor on!')
})