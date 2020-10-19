const isAuth = require("../../suppliers/authenticateFunction")
const numGen = require("../../suppliers/numericCodeGen")
const server = require("express").Router();
const { User } = require('../../db');
const bcrypt = require("bcrypt");
const passport = require("passport");

//--------------------------------------
//             MI PERFIL               |
//--------------------------------------
server.get('/me', isAuth, async (req, res) => {
    res.send(req.user)
})

//--------------------------------------
//         REGISTRAR USUARIO           |
//--------------------------------------
server.post('/register', async (req, res) => {
    const { name, surname, username, password } = req.body;

    if(!name) return res.status(400).send('debes enviarme un nombre')
    if(!surname) return res.status(400).send('debes enviarme un apellido')
    if(!username) return res.status(400).send('debes enviarme un usuario')
    if(!password) return res.status(400).send('debes enviarme una contraseña')

    const user = await User.findOne({
        where: { username }
    });
    if(user) return res.status(400).send('el usuario ya existe')
    
    const salt = bcrypt.genSaltSync(numGen(1));
    const hash = bcrypt.hashSync(password, salt);

    const creado = await User.create({
        name, 
        surname, 
        username, 
        password:  hash,
        salt: salt
    })

    res.send(creado);
})

//-------------------------------------
//           RUTA LOGIN               |
//-------------------------------------
server.post('/login', passport.authenticate("local"), (req, res) => {
    res.send(String(req.user.id));
})

//-------------------------------------
//           RUTA LOGOUT              |
//-------------------------------------
server.post("/logout", isAuth, (req, res) => {
    req.session.destroy();
    req.logOut()
    res.send("se deslogueo");
});

//-------------------------------------
//          RUTA ALL USERS            |
//-------------------------------------
server.get('/all', async (req, res) => {
    const users = await User.findAll();
    res.send(users);
})


module.exports = server;