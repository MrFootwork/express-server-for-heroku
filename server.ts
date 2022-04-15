import express from 'express'
const server = express()

server.get('/', function (req, res) {
	res.send('💩✈')
})

server.listen(process.env.PORT || 5000)
