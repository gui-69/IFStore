import Piloto from "../models/piloto.js";
import Cliente from "../models/cliente.js";
import Produto from "../models/produto.js";
import Contrato from "../models/contrato.js";

export async function listarcliente(req, res) {
    const clientes = await Cliente.find({});
    res.render('admin/clientes/lst',{Clientes: clientes});
}

export async function abreaddcliente(req, res) {
    res.render('admin/clientes/add');
}
// Função para abrir a edição de cliente
export async function abreedtcliente(req, res) {
    // Encontra o cliente pelo ID fornecido
    const cliente = await Cliente.findById(req.params.id);
    
    // Renderiza a página de edição passando o objeto cliente
    res.render('admin/cliente/edt.ejs', { Cliente: cliente });
}


export async function edtcliente(req, res) {
    await Cliente.findByIdAndUpdate(req.params.id,req.body)
   res.redirect('/admin/cliente/edt:id')
}


export async function addcliente(req, res) {
    await Cliente.create({
        nome:req.body.nome,
        cpf:req.body.cpf
    })
    res.redirect('admin/cliente/lst',{cliente: Cliente});
}

export async function deletecliente(req, res) {
    await Cliente.findByIdAndDelete(req.params.id)
    res.redirect('/admin/cliente/lst')
}



export async function filtrarcliente(req, res) {
    const clientes = await Cliente.find({nome: new RegExp(req.body.pesquisar,"i")});
    res.render('admin/cliente/lst',{Clientes: clientes});
}


//---------------contrato------------------------------
export async function abreaddcontrato(req, res){
    res.render('admin/contrato/add')
}


export async function addcontrato(req, res){
    await Contrato.create({
        nome:req.body.nome
    })
  res.redirect('/admin/contrato/add');

}
export async function listarcontrato(req, res){
    const contratos = await Contrato.find({});
    res.render('admin/contrato/lst',{contratos: contratos});
}

export async function filtrarcontrato(req, res){
    const contratos = await Contrato.find({nome: new RegExp(req.body.pesquisar,"i")});
    res.render('admin/contrato/lst',{contratos: contratos});
}

export async function deletecontrato(req, res){
     await Contrato.findByIdAndDelete(req.params.id)
    res.redirect('/admin/contrato/lst')
}


export async function abreedtcontrato(req, res){
    const contratos= await contrato.findById(req.params.id)
   res.render('admin/contrato/edt.ejs',{contrato: contratos});
}
export async function edtcontrato(req, res){
    await Contrato.findByIdAndUpdate(req.params.id,req.body)
   res.redirect('/admin/contrato/lst')
}

//-------------------------produto---------------------------------------



export async function abreaddproduto(req, res){
    res.render('admin/produto/add')
}


export async function addproduto(req, res){
   console.log('req.files');
    let fotos=[];
   for(var i=0; i<req.files.length; i++){
    fotos[i] = req.files[i].filename;
   }
    await Produto.create({
        nome:req.body.nome,
        valor:parseFloat(req.body.valor),
        foto:fotos,
    });
  res.redirect('/admin/produto/add');

}
export async function listarproduto(req, res){
    const produtos = await Produto.find({});
    res.render('admin/produto/lst',{Produtos: produtos});
}

export async function filtrarproduto(req, res){
    const produtos = await Produto.find({nome: new RegExp(req.body.pesquisar,"i")});
    res.render('admin/produto/lst',{Produtos: produtos});
}

export async function deleteproduto(req, res){
     await Produto.findByIdAndDelete(req.params.id)
    res.redirect('/admin/produto/lst')
}


export async function abreedtproduto(req, res){
    const produto= await Produto.findById(req.params.id)
   res.render('admin/produto/edt.ejs',{Produto: produto});
}
export async function edtproduto(req, res){
    await Produto.findByIdAndUpdate(req.params.id,req.body)
   res.redirect('/admin/produto/lst')
}
//-------------------------piloto-------------------------


export async function listarpiloto(req, res){
    const pilotos = await Piloto.find({});
    res.render('admin/piloto/lst',{pilotos: pilotos});
}


export async function abreaddpiloto(req, res){
    res.render('admin/piloto/add')
}


export async function abreedtpiloto(req, res) {
    const pilotos = await Piloto.find({});
    res.render('admin/pilotos/lst',{Pilotos: pilotos});
}

export async function deletepiloto(req, res) {
    const pilotos = await Piloto.find({});
    res.render('admin/pilotos/lst',{Pilotos: pilotos});
}

export async function filtrarpiloto(req, res) {
    const pilotos = await Piloto.find({});
    res.render('admin/pilotos/lst',{Pilotos: pilotos});
}

export async function addpiloto(req, res) {
    const pilotos = await Piloto.find({});
    res.render('admin/pilotos/lst',{Pilotos: pilotos});
}

export async function edtpiloto(req, res) {
    const pilotos = await Piloto.find({});
    res.render('admin/pilotos/lst',{Pilotos: pilotos});
}