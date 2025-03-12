import express from 'express'
import getPropertyController from '../controllers/property/getPropertyController.js'
import postPropertyController from '../controllers/property/postPropertyController.js'
import putPropertyController from '../controllers/property/putPropertyController.js'
import patchPropertyController from '../controllers/property/patchPropertyController.js'
import deletePropertyController from '../controllers/property/deletePropertyController.js'


const propertyRouter = express.Router();

propertyRouter.get('/', getPropertyController )

propertyRouter.post('/', postPropertyController)

propertyRouter.put('/', putPropertyController)

propertyRouter.patch('/', patchPropertyController)

propertyRouter.delete('/', deletePropertyController)

export default propertyRouter