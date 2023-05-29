const express = require("express");
require('dotenv').config({path: './.env'})
const cookieParser = require('cookie-parser')
const routes = require('./routes/routes')
const app = express();
const port = 3000;

// dotenv.config({path: "./.env"});

console.log(process.env)

app.use(express.json())
app.use(routes)
app.use(cookieParser)
app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.use('/api/v1/', routes)

app.listen(port, () => console.log(`app listening on port ${port}`))
