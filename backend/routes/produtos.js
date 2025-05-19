const express = require('express');
const router = express.Router();
const db = require('../db');

//GET
router.get('/', (req, res) => {
  db.query('SELECT * FROM produtos', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

//POST
router.post('/', (req, res) => {
  const { name, preco, categoria, descricao, vendedor, cpf, cidade } = req.body;
  const sql = 'INSERT INTO produtos (name, preco, categoria, descricao, vendedor, cpf, cidade) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(sql, [name, preco, categoria, descricao, vendedor, cpf, cidade], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ id: result.insertId });
  });
});

//PUT
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, preco, categoria, descricao, vendedor, cpf, cidade } = req.body;
    const sql = `UPDATE produtos SET name = ?, preco = ?, categoria = ?, descricao = ?, vendedor = ?, cpf = ?, cidade = ? WHERE id = ?`;
    db.query(sql, [name, preco, categoria, descricao, vendedor, cpf, cidade, id], (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'Produto atualizado' });
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM produtos WHERE id = ?', [id], (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'Produto deletado' });
    });
});
module.exports = router;