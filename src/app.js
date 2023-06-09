import express from 'express'
import userRouter from './routers/user.router.js'
import petRouter from './routers/pet.router.js'
import multer from 'multer'

const error = false

const app = express()
app.use(express.json())
app.use(express.static('/public'))

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})
const uploader = multer({storage})

//endpoints
// http://localhost:8080/
app.get('/', (req, res) => res.send('Ok'))
app.get('/health', (req, res) => res.json({ message: 'The server is running on port 8080' }))
app.post('/', uploader.single('archivo'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ status: 'error', error: 'No file'})
    }
    res.json({ status: 'success', message: 'File uploaded!'})
})

const middleware1 = (req, res, next) => {
    console.log('Soy un middleware 1!')
    if (error) return res.status(400).json({ error: 'HUbo un erroro!'})
    next()
}

const middleware2 = (req, res, next) => {
    console.log('Soy un middlewar 2 !')
    if (error) return res.status(400).json({ error: 'HUbo un erroro!'})
    next()
}

app.use('/users', middleware1, middleware2, userRouter)
app.use('/pets', petRouter)

app.listen(8080, () => console.log('Server Up'))

//split = modularize! = module