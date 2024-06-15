const express = require('express');
const cors = require('cors');
const router = require('./routes');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
const app= express();
app.use(cors());
app.use(bodyParser.json());
app.use(router);

app.listen(port,()=>{
    console.log(`server running on port : ${port}`);
});