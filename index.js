const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const githubData = {
"login": "hiteshchoudhary",
"id": 11613311,
"node_id": "MDQ6VXNlcjExNjEzMzEx",
"avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4",
"url": "https://api.github.com/users/hiteshchoudhary",
"html_url": "https://github.com/hiteshchoudhary",
}

app.get('/', (req, res) => {
res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
res.send('hiteshdotcompra')
})

app.get('/login', (req, res) => {
res.send('hiteshchoudhary')
})

app.get('/yt',(req,res)=>{
res.send('megayt')
})

app.get('/github', (req, res) => {
res.json(githubData)
})

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})