import { Router } from 'express'
import { body, param } from 'express-validator'
import { createProduct, getProductById, getProducts } from './handlers/product'
import { handleInputErrors } from './middleware'

const router = Router()

router.get('/', getProducts)

router.get('/:id', 
    param('id').isInt().withMessage('ID no válido'),
    handleInputErrors,
    getProductById
)

router.post('/', 
    
    // Validación
    body('name')
        .notEmpty().withMessage('El nombre del producto no puede ir vacio'),
    body('price')
        .isNumeric().withMessage('Valor no válido')
        .notEmpty().withMessage('El precio del producto no puede ir vacío')
        .custom( value => value > 0).withMessage('Precio no válido'),
    
    handleInputErrors,

    createProduct
)

router.put('/', (req,res) => {
    res.json("Desde PUT")
})

router.patch('/', (req,res) => {
    res.json("Desde PATCH")
})

router.delete('/', (req,res) => {
    res.json("Desde DELETE")
})

export default router