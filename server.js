const express = require('express');
const db = require('./db/db');

const app = express();
const port = 3000;

// Servir archivos estáticos
app.use(express.static('public'));
app.use(express.urlencoded({
    extended: true
  }));

// Endpoint para registrarse
app.post('/register', async (req, res) => {
    try {
        console.log(req.body);
        let username = req.body.usuario;
        let password = req.body.passwd;
        // const result = await db.query(`SELECT * FROM USUARIOS WHERE USUARIO = ${username}`);
        const result = await db.query(`INSERT INTO USUARIOS (USUARIO, PASSWD) VALUES ('${username}', '${password}')`);
        res.status(200).send("Usuario registrado");
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
});

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});