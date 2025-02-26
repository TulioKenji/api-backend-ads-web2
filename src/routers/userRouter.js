import express from 'express'


const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.json({
      message: "user page",
      user: "tulio",
      email:"tulio.y",
      avatar: "https://github.com/tuliokenji.png"
    })
  })
  
  userRouter.post('/', (req, res) => {
    res.json({
      message: "usuario criado",
      user: "tulio",
      email:"tulio.y",
      avatar: "https://github.com/tuliokenji.png"
    })
  })
  
  userRouter.put('/', (req, res) => {
    res.json({
      message: "usuario atualizado",
      user: "tulioky",
      email:"tulio.ky",
      avatar: "https://github.com/tuliokenji.png"
    })
  })
  
  userRouter.patch('/', (req, res) => {
    res.json({
      message: "nome atualizado",
      user: "tulio",
      email:"tulio.ky",
      avatar: "https://github.com/tuliokenji.png"
    })
  })
  
  userRouter.delete('/', (req, res) => {
    res.json({
      message: "usuario deletado",
      user: "tulio",
      email:"tulio.y",
      avatar: "https://github.com/tuliokenji.png"
    })
  })

 export default userRouter;