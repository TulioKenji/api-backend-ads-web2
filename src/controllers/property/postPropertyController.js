import { create } from '../../models/propertymodel.js'

const postPropertyController = async (req, res) =>{
    const property = req.body;

    const result = await create(property)

    res.json({
        message: "produto 1 adicionado",
        property: property
        
    })
}

export default postPropertyController