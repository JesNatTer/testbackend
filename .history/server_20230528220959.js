const express = require("express");
const routes = require('./routes/routes')
const app = express();
const port = 3000;

app.use(express.json())
app.use(routes)
app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.use('/api/v1/', routes)

app.listen(port, () => console.log(`app listening on port ${port}`))
