import express from 'express';
const app = express();
const port = 3000

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended:true }));

import usuario from './models/usuario.js';

app.get('/cadastro',(req,res)=>{
      res.render('cadastro')
});

app.post('/cadastro', async(req,res)=>{
 
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
});
   
/*     const nome = req.body.nome;  metodo longo
      const email = req.body.email;
      const senha = req.body.senha;
      const endereco = req.body.endereco;
      const foto=req.body.foto;
      const telefone = req.body.telefone;
      const cpf = req.body.cpf;
      const admin = req.body.admin;

  const novoUsuario= new usuario(req.body) metodo curto


  let x;
  if(req.body.admin=="on"){
      x=true;
  }else{
    x=false;
  
}
*/ 

app.get('/login',(req,res)=>{
      res.render('login')

});

app.post('/login',(req,res)=>{
      res.redirect('/admin/usuarios/lst')
      
});

app.listen(port);