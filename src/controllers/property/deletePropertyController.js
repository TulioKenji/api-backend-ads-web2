const deletePropertyController = (req, res) =>{
    res.json({
        message: "produto1 deletado",
        property: {
            name: "produto1",
            id: "00",
            value: "55,00",
            description: "sofa-cama"
        }
        
    })
}

export default deletePropertyController