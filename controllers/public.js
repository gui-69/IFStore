import usuario from '../models/usuario.js';
    
export async function abreCadastro(req,res){
    res.render('cadastro')
}
 
export async function cadastro(req,res){

    //esse comando equivale a um if
    const admin=req.body.admin=="on"?true:false;

    const novoUsuario = new usuario({ //metodo medio
          nome: req.body.nome,
          email: req.body.email,
          senha: req.body.senha,
          endereco: req.body.endereco,
          foto: req.body.foto,
          telefone: req.body.telefone,
          cpf: req.body.cpf,
          admin:admin,
    });

   await novoUsuario.save();
   res.send("Cadastrado com sucesso!");
}

export async function abreLogin(req,res){
    res.render('login')

}

export async function Login(req,res){
    res.redirect('/admin/usuarios/lst')
    
}