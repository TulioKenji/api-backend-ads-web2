import express from 'express'
import userRouter from './routers/userRouter.js'
import propertyRouter from './routers/propertyRouter.js'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.redirect('https://www.google.com')
})

app.use('/user', userRouter)
app.use('/property', propertyRouter)

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})