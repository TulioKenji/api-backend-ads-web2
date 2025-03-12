const postPropertyController = (req, res) =>{
    const property = req.body;
    res.json({
        message: "produto 1 adicionado",
        property: property
        
    })
}

export default postPropertyController