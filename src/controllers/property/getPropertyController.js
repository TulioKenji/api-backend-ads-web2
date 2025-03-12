export default function getPropertyController (req, res) {

    return res.json({
        message: "produto 1",
        property: {
            name: "produto1",
            id: "0",
            value: "40,00",
            description: "sofa"
        }
        
    })
}

// const getProperty = (req, res) =>{
//     res.json({
//         message: "produto 1",
//         property: {
//             name: "produto1",
//             id: "0",
//             value: "40,00",
//             description: "sofa"
//         }
        
//     })
// }

// export default getProperty