import express from 'express'


const router = express.Router();

router.get('/', (req, res) => {
    res.json({
      message: "user page",
      user: "tulio",
      email:"tulio.y",
      avatar: "https://github.com/tuliokenji.png"
    })
  })
  
  router.post('/', (req, res) => {
    res.json({
      message: "usuario criado",
      user: "tulio",
      email:"tulio.y",
      avatar: "https://github.com/tuliokenji.png"
    })
  })
  
  router.put('/', (req, res) => {
    res.json({
      message: "usuario atualizado",
      user: "tulioky",
      email:"tulio.ky",
      avatar: "https://github.com/tuliokenji.png"
    })
  })
  
  router.patch('/', (req, res) => {
    res.json({
      message: "nome atualizado",
      user: "tulio",
      email:"tulio.ky",
      avatar: "https://github.com/tuliokenji.png"
    })
  })
  
  router.delete('/', (req, res) => {
    res.json({
      message: "usuario deletado",
      user: "tulio",
      email:"tulio.y",
      avatar: "https://github.com/tuliokenji.png"
    })
  })