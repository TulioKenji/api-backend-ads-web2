const putPropertyController = (req, res) =>{
    res.json({
        message: "produto 1 atualizado",
        property: {
            name: "produto1",
            id: "00",
            value: "45,00",
            description: "sofa-cama"
        }
        
    })
}

export default putPropertyController