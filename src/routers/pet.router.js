import { Router } from 'express'

const router = Router()

let pets = [
    { id: 1, name:'Firulais', age: 4 },
    { id: 2, name:'Michi', age: 7 },
]

//endpoint para leer todos los usuarios
// http://localhost:8080/pets/
router.get('/', (req, res) => {
    res.status(200).json({ pets })
})

//endpoint para leer un solo usuario a partir de su ID
router.get('/:id', (req, res) => {
    const id = req.params.id
    const pet = pets.find(item => item.id == id)
    if (!pet) return res.status(404).json({ message: 'This pet doesnot exists'})
    res.json({ pet })
})

//endpoint para crear a un nuevo usuario
router.post('/', (req, res) => {
    const { id, name, age } = req.body
    pets.push({ id, name, age })
    res.json({ message: 'Pet registrado con éxito!' })
})

//endpoint para actualizar los datos de un usuario
router.put('/:id', (req, res) => {
    const id = req.params.id
    const data = req.body
    const petIndex = pets.findIndex(item => item.id == id)
    pets[petIndex] = { ...pets[petIndex], ...data }
    res.json({ message: `Actualización exitosa de pet con id = ${id}` })
})

//endpoint para eliminar un usuario
router.delete('/:id', (req, res) => {
    const id = req.params.id
    pets = pets.filter(item => item.id != id)
    res.json({ message: `Pet con id = ${id} eliminado` })
})

export default router