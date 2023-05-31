import { Router } from 'express'

const router = Router()

//endpoint para leer todos los usuarios
// http://localhost:8080/users/
router.get('/', (req, res) => {
    //TODO: lógica
    res.json({ message: 'Aqui va la lista de usuarios' })
})

//endpoint para leer un solo usuario a partir de su ID
router.get('/:id', (req, res) => {
    const id = req.params.id
    res.json({ message: `Aqui van los detalles del usuario con id = ${id}` })
})

//endpoint para crear a un nuevo usuario
router.post('/', (req, res) => {
    res.json({ message: 'Usuario registrado con éxito!' })
})

//endpoint para actualizar los datos de un usuario
router.put('/:id', (req, res) => {
    const id = req.params.id
    res.json({ message: `Actualización exitosa de usuario con id = ${id}` })
})

//endpoint para eliminar un usuario
router.delete('/:id', (req, res) => {
    const id = req.params.id
    res.json({ message: `Usuario con id = ${id} eliminado` })
})

export default router