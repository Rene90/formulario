const mongoose = require('mongoose')
const Schema = mongoose.Schema
const formularioSchema = new Schema({
  studentname:String,
  parentname:String,
  pregunta1:String,
  pregunta2:String,
  pregunta3:String,
  pregunta4:String,
  pregunta5:String,
  comentario1:String,
  comentario2:String,
  comentario3:String

},{
  timestamps:true
})
const Formulario = mongoose.model('Formulario',formularioSchema)
module.exports=Formulario