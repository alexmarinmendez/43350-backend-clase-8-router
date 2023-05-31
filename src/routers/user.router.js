import { Router } from 'express'

const router = Router()

let users = [
    { id: 1, name:'Susana Oria', age: 45 },
    { id: 2, name:'Zoila Baca', age: 27 },
]

//endpoint para leer todos los usuarios
// http://localhost:8080/users/
router.get('/', (req, res) => {
    res.status(200).json({ users })
})

//endpoint para leer un solo usuario a partir de su ID
router.get('/:id', (req, res) => {
    const id = req.params.id
    const user = users.find(item => item.id == id)
    if (!user) return res.status(404).json({ message: 'This user doesnot exists'})
    res.json({ user })
})

//endpoint para crear a un nuevo usuario
router.post('/', (req, res) => {
    const { id, name, age } = req.body
    users.push({ id, name, age })
    res.json({ message: 'Usuario registrado con éxito!' })
})

//endpoint para actualizar los datos de un usuario
router.put('/:id', (req, res) => {
    const id = req.params.id
    const data = req.body
    const userIndex = users.findIndex(item => item.id == id)
    users[userIndex] = { ...users[userIndex], ...data }
    res.json({ message: `Actualización exitosa de usuario con id = ${id}` })
})

//endpoint para eliminar un usuario
router.delete('/:id', (req, res) => {
    const id = req.params.id
    users = users.filter(item => item.id != id)
    res.json({ message: `Usuario con id = ${id} eliminado` })
})

export default router