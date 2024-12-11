import express from 'express';

const router = express.Router();

import multer from 'multer';
const upload = multer({ dest: 'public/' });

import {
    
    abreaddcliente,
    addcliente,
    listarcliente,
    filtrarcliente,
    deletecliente,
    abreedtcliente,
    edtcliente,
    //------------
    abreaddproduto,
    addproduto,
    listarproduto,
    filtrarproduto,
    deleteproduto,
    edtproduto,
    abreedtproduto,
    //-------------
    listarpiloto,
    abreaddpiloto,
    filtrarpiloto,
    deletepiloto,
    abreedtpiloto,
    addpiloto,
    edtpiloto,
    //------------
    
    abreaddcontrato,
    listarcontrato,
    filtrarcontrato,
    deletecontrato,
    edtcontrato,
    addcontrato,
    abreedtcontrato,

    pesquisar
   

} from '../controllers/admin.js';

// cliente --------------------------------------------------------------
router.get("/admin/clientes/lst", listarcliente);


//create do modelo catgoriaroute
router.get("/admin/clientes/add",abreaddcliente);
router.post("/admin/clientes/add",addcliente); 

//rotas do modelo cliente(read)
router.get("/admin/clientes/lst",listarcliente);
router.post("/admin/clientes/lst",filtrarcliente); 

//deletar
router.get('/admin/clientes/del/:id',deletecliente);

//ditar
router.get('/admin/clientes/edt/:id',abreedtcliente);
router.post('/admin/clientes/edt/:id',edtcliente);

//------------------------------------------------

//novo PRODUTO

//create do modelo produtoroute
router.get("/admin/produto/add",abreaddproduto);
router.post("/admin/produto/add", upload.array('foto',5), addproduto); 

//rotas do modelo categoria(read)
router.get("/admin/produto/lst",listarproduto);
router.post("/admin/produto/lst",filtrarproduto); 

//deletar
router.get('/admin/produto/del/:id',deleteproduto);

//ditar
router.get('/admin/produto/edt/:id',abreedtproduto);
router.post('/admin/produto/edt/:id',edtproduto);

//piloto------------------------------------------------


router.get("/admin/piloto/lst", listarpiloto);

//create do modelo catgoriaroute
router.get("/admin/piloto/add",abreaddpiloto);
router.post("/admin/piloto/add",addpiloto); 

//rotas do modelo piloto(read)
router.get("/admin/piloto/lst",listarpiloto);
router.post("/admin/piloto/lst",filtrarpiloto); 

//deletar
router.get('/admin/piloto/del/:id',deletepiloto);

//ditar
router.get('/admin/piloto/edt/:id',abreedtpiloto);
router.post('/admin/piloto/edt/:id',edtpiloto);

//contrato------------------------------------------------

router.get("/admin/contrato/lst", listarcontrato);

//create do modelo catgoriaroute
router.get("/admin/contrato/add",abreaddcontrato);
router.post("/admin/contrato/add",addcontrato);

//rotas do modelo contrato(read)
router.get("/admin/contrato/lst",listarcontrato);
router.post("/admin/contrato/lst",filtrarcontrato);

//deletar
router.get('/admin/contrato/del/:id',deletecontrato);

//ditar
router.get('/admin/contrato/edt/:id',abreedtcontrato);
router.post('/admin/contrato/edt/:id',edtcontrato);

//contrato------------------------------------------------

router.post('/admin/pesquisar/',pesquisar);

export default router   
