const { Router } = require('express')
const { 
    createProyecto, 
    getProyectos, 
    updateProyectoByID 
} =
 require('../controllers/proyecto')

const router = Router()

// crear
router.post('/', createProyecto)

// consultar todos
router.get('/', getProyectos)
console.log('Peticion a getProyectos')


router.put('/:id', updateProyectoByID)

module.exports = router;