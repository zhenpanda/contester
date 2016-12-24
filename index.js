const express = require('express');
const app = express();

app.use(express.static(__dirname + "/public"));
// app.use(bodyParser.json());
app.get('/', (req,res)=>{
  res.send("Hello World!");
})

const port = 4000;
app.listen(port, ()=>{console.log("listenin on port:"+port+" captain!")});
