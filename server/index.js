const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const path = require('path')
const getRoutes = require('./routes')
const PORT = process.env.PORT || 4000

const app = express()
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())

// Serve the built version of our React app
app.use(express.static(path.resolve(__dirname, '../client/build')))

app.use('/v1', getRoutes())

// All routes that don't match api will be caught by this route (routed through our React app)
app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
