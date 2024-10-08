import conecxao from '../config/conecxao.js'

const Produto= conecxao.Schema({
    nome:'String',
    categoria:'String',
     valor:'number',
     foto:'String',
     descricao:'String',
  
});
export default conecxao.model('Produto', Produto);