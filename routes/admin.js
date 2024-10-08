import express from 'express';

const router = express.Router();

import {listarusuarios,
     detalhe,
     abreaddcategoria,
     addcategoria, 
     listarcategoria,
    filtrarcategoria, 
    deletecategoria,
    edtcategoria,
    abreedtcategoria,
    abreaddproduto,
    addproduto,
    listarproduto,
    filtrarproduto,
    deleteproduto,
    edtproduto,
    abreedtproduto,
} from '../controllers/admin.js';


router.get("/admin/usuarios/lst", listarusuarios);

router.get("/admin/usuarios/detalhe/:id",detalhe);

//create do modelo catgoriaroute
router.get("/admin/categoria/add",abreaddcategoria);
router.post("/admin/categoria/add",addcategoria); 

//rotas do modelo categoria(read)
router.get("/admin/categoria/lst",listarcategoria);
router.post("/admin/categoria/lst",filtrarcategoria); 

//deletar
router.get('/admin/categoria/del/:id',deletecategoria);

//ditar
router.get('/admin/categoria/edt/:id',abreedtcategoria);
router.post('/admin/categoria/edt/:id',edtcategoria);

//------------------------------------------------

//novo PRODUTO

//create do modelo produtoroute
router.get("/admin/produto/add",abreaddproduto);
router.post("/admin/produto/add",addproduto); 

//rotas do modelo categoria(read)
router.get("/admin/produto/lst",listarproduto);
router.post("/admin/produto/lst",filtrarproduto); 

//deletar
router.get('/admin/produto/del/:id',deleteproduto);

//ditar
router.get('/admin/produto/edt/:id',abreedtproduto);
router.post('/admin/produto/edt/:id',edtproduto);

export default router   
