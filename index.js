const express = require('express')
const path = require("path");
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

// app.get('/', function (req, res) {
//     res.send('<h1>TOPだよ！！<h1>')
// })

app.post('/api/v1/quiz', function (req, res) {
    const answer = req.body.answer;
    answer==="2"? res.redirect("/correct.html"):res.redirect("/wrong.html");
});

app.get('/item', function (req, res) {
    res.send('<div>正解</div>')
});

app.listen(3000, ()=>{
    console.log("I am running...");
});

console.log("最後");