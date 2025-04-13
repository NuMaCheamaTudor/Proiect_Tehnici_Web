// app.js - serverul principal pentru Etapa 4

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Setăm EJS ca view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servim fișiere statice din folderul public
app.use(express.static(path.join(__dirname, 'public')));

// Rute
app.get('/', (req, res) => {
    res.render('index', { title: 'Da,ba,datoria!' });
});

app.get('/login', (req, res) => {
    res.render('login', { title: 'Autentificare' });
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard', { title: 'Panou utilizator' });
});

// Rulăm serverul
app.listen(PORT, () => {
    console.log(`Serverul rulează la http://localhost:${PORT}`);
});