import conecxao from '../config/conecxao.js'

const usuario= conecxao.Schema({
    nome:{type:String, required:true},
    email:{type:String, required:true,unique:true},
    senha:{type:String, required:true},
    foto:'String',
    endereco:'String',
    telefone:'String',
    cpf:'String',
    admin:'Boolean',
  
});
export default conecxao.model('usuario', usuario);