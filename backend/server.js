import express from 'express'
import morgan from 'morgan'
import path from 'path'
import dotenv from 'dotenv'
import connectDB from './dbConnection/mongodb.js'

//routed
import gameRoutes from './routes/gameRoute.js'

const app = express()

app.use(morgan('dev'))
const PORT = process.env.PORT || 5000

app.use(express.json())
console.log('Started')

// All Credential Things in Dotenv
dotenv.config()

// DataBase Connection
connectDB()

app.use(gameRoutes)

const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  })
} else {
  // Server Testing
  app.use('/test', (req, res) => {
    res.send('Server Tested')
  })
}



app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
)
