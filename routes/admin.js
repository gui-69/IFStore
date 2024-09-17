import express from 'express';
const router = express.Router();

app.get("/admin/usuarios/lst", (req, res) => {
    res.render('admin/usuarios/lst');
});

export default router