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
   

} from '../controllers/admin.js';

// cliente --------------------------------------------------------------
router.get("/admin/cliente/lst", listarcliente);


//create do modelo catgoriaroute
router.get("/admin/cliente/add",abreaddcliente);
router.post("/admin/cliente/add",addcliente); 

//rotas do modelo cliente(read)
router.get("/admin/cliente/lst",listarcliente);
router.post("/admin/cliente/lst",filtrarcliente); 

//deletar
router.get('/admin/cliente/del/:id',deletecliente);

//ditar
router.get('/admin/cliente/edt/:id',abreedtcliente);
router.post('/admin/cliente/edt/:id',edtcliente);

//------------------------------------------------

//novo PRODUTO

//create do modelo produtoroute
router.get("/admin/produto/add",abreaddproduto);
router.post("/admin/produto/add", upload.array('foto',5),addproduto); 

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


export default router   
