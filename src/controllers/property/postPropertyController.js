const postPropertyController = (req, res) =>{
    res.json({
        message: "produto 1 adicionado",
        property: {
            name: "produto1",
            id: "0",
            value: "40,00",
            description: "sofa"
        }
        
    })
}

export default postPropertyController