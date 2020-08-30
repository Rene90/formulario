const express = require('express')


const Formulario = require('../models/Formulario')
const router = express.Router()

router.post('/submit',(req,res,next)=>{
  Formulario.create({
    studentname:req.body.studentname,
    parentname:req.body.parentname,
    pregunta1:req.body.pregunta1,
    pregunta2:req.body.pregunta2,
    pregunta3:req.body.pregunta3,
    pregunta4:req.body.pregunta4,
    comentario1:req.body.comentario1,
    comentario2:req.body.comentario2
  }).then(formulario=>{
    res.json(formulario)
  }).catch(err=>{
    res.json(err)
  })
})
module.exports = router