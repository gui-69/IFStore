import conecxao from '../config/conecxao.js'

const usuario= conecxao.Schema({
    nome:'String',
    email:'String',
    senha:'String',
    foto:'String',
    endereco:'String',
    telefone:'String',
    cpf:'String',
    admin:'Boolean',
})

export default conecxao.model('usuario', usuario)