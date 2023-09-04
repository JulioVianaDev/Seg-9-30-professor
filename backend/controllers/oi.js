module.exports = class OiController{
  static async initial(req,res){
    res.status(200).json({message: "deu certo"})
  }
}