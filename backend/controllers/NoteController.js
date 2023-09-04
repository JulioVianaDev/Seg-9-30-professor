const Note = require("../models/Note")

module.exports = class NotesController{
  static async getAll(req,res){
    try {
      const notes =await  Note.findAll();
      res.status(201).json(notes)
    } catch (error) {
      console.log(error)
      res.status(500).json({error: "algo deu errado, tente depois"})
    }
  }
  static async createNote(req,res){
    const {title,description} = req.body;
    if (!title){
      return res.status(402).json({message: "o title é obrigatório"})
    }
    try {
      const note = await Note.create({title, description })
      res.status(201).json({message: "criado com sucesso",note: note})
    } catch (error) {
      console.log(error)
      res.status(500).json({error: "algo deu errado, tente depois"})
    }
  }
  static async deleteNote(req,res){
    res.status(200).json({message: "rota para deletar um"})
  }
  static async editNote(req,res){
    res.status(200).json({message: "rota para editar um"})
  }
}