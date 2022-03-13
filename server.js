const express = require("express");
const { restart } = require("nodemon");

const app = express();

const port = 3030;
app.listen(port , ()=>{

    console.log("hello, port here" , +port)
})



console.log("done porting. line 12");

const addTwoNum = (n1,n2)=>{
    return n1+n2;
}

// console.log(addTwoNum (10,10));

app.get('/addTwoNum', (req, res)=>{

    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);

    // const result = addTwoNum(10,13);
    res.send(addTwoNum(n1, n2).toString());
})