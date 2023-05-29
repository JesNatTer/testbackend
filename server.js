const dotenv = require('dotenv');
dotenv.config({path:`${__dirname}/.env`});
// dotenv.config({path:`${__dirname}/etc/secrets/.env`});
const express = require("express");
const cookieParser = require('cookie-parser')
const app = express();
// console.log(process.env)
const routes = require('./routes/routes')

const port = process.env.PORT || 3000;

app.use(express.json())
app.use(routes)
app.use(cookieParser)
app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.use('/api/v1/', routes)

app.listen(port, () => console.log(process.env), console.log(`app listening on port ${port}`))
