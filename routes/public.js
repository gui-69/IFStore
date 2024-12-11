import express from 'express';
const router = express.Router();
import multer from 'multer';

const upload=multer({dest: 'public/usuarios/'});

import {abreCadastro, cadastro, abreLogin, Login, abreindex} from '../controllers/public.js';


router.get('/cadastro',abreCadastro);

router.post('/cadastro', upload.single('foto'), cadastro);


router.get('/login',abreLogin);

router.post('/login',Login);


router.get('/', abreindex)

export default router;
