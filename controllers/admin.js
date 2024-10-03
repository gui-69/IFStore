import Categoria from "../models/categoria.js";
import Usuario from "../models/usuario.js";


export async function listarusuarios(req, res) {
    const usuarios = await Usuario.find({});
    res.render('admin/usuarios/lst',{usuarios: usuarios});
}

export async function detalhe(req,res){
    const usuario= await Usuario.findById(req.params.id)
    res.render('admin/usuarios/detalhe',{usuario: usuario})
}

export async function abreaddcategoria(req, res){
    res.render('admin/categoria/add')
}


export async function addcategoria(req, res){
    await Categoria.create({
        nome:req.body.nome
    })
  res.redirect('/admin/categoria/add');

}
export async function listarcategoria(req, res){
    const categorias = await Categoria.find({});
    res.render('admin/categoria/lst',{Categorias: categorias});
}

export async function filtrarcategoria(req, res){
    const categorias = await Categoria.find({nome: new RegExp(req.body.pesquisar,"i")});
    res.render('admin/categoria/lst',{Categorias: categorias});
}

export async function deletecategoria(req, res){
     await Categoria.findByIdAndDelete(req.params.id)
    res.redirect('/admin/categoria/lst')
}

export async function editarcategoria(req, res){
    await Categoria.findByIdAndEdit(req.params.id)
   res.redirect('/admin/categoria/lst')
}
