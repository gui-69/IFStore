import express from 'express';

const router = express.Router();

import {listarusuarios, detalhe,abreaddcategoria,addcategoria, listarcategoria,filtrarcategoria, deletecategoria,editarcategoria} from '../controllers/admin.js';

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
router.get('/admin/categoria/edt/:id',editarcategoria);

export default router   
