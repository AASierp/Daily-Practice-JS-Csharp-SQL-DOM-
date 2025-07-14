const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/hello', (req, res) =>{
    res.json({message: "hello from the server"});
});



app.post('/hello', (req, res) => {
    const data = req.body;
    res.json({
        message: "you sent this",
        data: data
    })
})


app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`));