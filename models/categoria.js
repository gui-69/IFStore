import conecxao from '../config/conecxao.js'

const Categoria= conecxao.Schema({
    nome:{type:String, required:true}
  
});
export default conecxao.model('Categoria', Categoria);