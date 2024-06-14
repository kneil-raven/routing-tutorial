const express = require('express')
const app = express()


// middlewares to view request in the body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/tacos', (req, res) => {
    res.send('Getting GET /tacos response!!!')
})

app.post('/tacos', (req, res) => {
    const {meat, qty} = req.body;
    console.log(req.body)
    res.send(`Meat ordered: ${meat};  Quantity: ${qty}`)
    res.send('POST /tacos responsezzz')
})

app.listen(3000, () => {
    console.log('on port 3000')
})