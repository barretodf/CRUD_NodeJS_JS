const express = require('express');
const router = express.Router();
const db = require('../config/db');
// --------Rotas--------------
 
//Criar Usuários
 router.post('/', async (req, res) => {
    const { name, email, phone, profession } = req.body;

    try {
        const [result] = await db.query(
            'INSERT INTO users (name, email, phone, profession) VALUES (?, ?, ?, ?)', [name, email, phone, profession]
        );
        res.status(201).json({ message:'Usuário criado com sucesso!', userid: result.insertId});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar o usuário!'});
    }
 });
 
 //Listar todos os usuários
 router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM users');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar usuários'});
    }
 });

//Atualizar usuário pelo ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email, phone, profession } = req.body;

    try {
        const [result] = await db.query(
            'UPDATE users SET name = ?, email = ?, phone = ?, profession = ? WHERE id = ?',
            [name, email, phone, profession, id] 
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado!'});
        }
        res.json({ message: 'Usuario atualizado com sucesso!'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar o usuário'});
    }
}); 

// Excluir usuário pelo ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    
    try {
        const [result] = await db.query('DELETE FROM users WHERE id = ?', [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.json({ message: 'Usuário excluido com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao excluir o usuário' });
    }
});

// --------------------------
// /Rota de teste para listar todos os usuários
router.get('/', async (requestAnimationFrame, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM users');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar usuários '});
    }
});

module.exports = router;

