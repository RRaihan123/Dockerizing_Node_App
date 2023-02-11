const express = require("express");
const app = express();

const PORT = 3000;

app.get("/",(req,res) => {
    res.send(`<br/><br/><br/>
              <h1 style="text-align:center">First Docker</h1>`
            )
})

app.listen(PORT,() => {
    console.log(`server is listening on port ${PORT}`)
})