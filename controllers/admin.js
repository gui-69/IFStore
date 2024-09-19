import usuario from "../models/usuario.js";


export async function listarusuarios(req, res) {
    const usuarios = await usuario.find({});
    res.render('admin/usuarios/lst',{usuarios: usuarios});
}