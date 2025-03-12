const getUserController = (req, res) => {
    res.json({
      message: "user page",
      user: "tulio",
      email:"tulio.y",
      avatar: "https://github.com/tuliokenji.png"
    })
  }

export default getUserController