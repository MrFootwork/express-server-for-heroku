const express = require('express')
const app = express()

app.get('/', function (req, res) {
	res.send('i changed this again!!!!')
})

app.listen(process.env.PORT || 5000)

// const port = 3000
// const html =
// 	'<h1>Hallöchen!</h1>' +
// 	'<h1>second information</h1>' +
// 	`<a href="http://localhost:${port}/contact">Contact</a>` +
// 	`<a href="http://localhost:${port}/about">About</a>` +
// 	`<a href="http://localhost:${port}/hobbies">Hobbies</a>`

// app.get('/', (req, res) => {
// 	res.send(html)
// })

// app.get('/contact', (req, res) => {
// 	res.send('Contact me at pandau@gmail.com')
// })

// app.get('/about', (req, res) => {
// 	res.send("That's Pandau's website.")
// })

// app.get('/hobbies', (req, res) => {
// 	res.send('<ul><li>eat</li><li>sleep</li><li>programming</li></ul>')
// })

// app.listen(port, () => {
// 	console.log(`Example app listening at http://localhost:${port}`)
// })
