import express from 'express'
import userRouter from './routers/user.router.js'

const app = express()
app.use(express.json())

//endpoints
// http://localhost:8080/
app.get('/', (req, res) => res.send('Ok'))
app.get('/health', (req, res) => res.json({ message: 'The server is running on port 8080' }))

app.use('/users', userRouter)

app.listen(8080, () => console.log('Server Up'))

//split = modularize! = module