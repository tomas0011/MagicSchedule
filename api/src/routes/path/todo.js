const isAuth = require("../../suppliers/authenticateFunction")
const server = require("express").Router();
const { Todo } = require('../../db');

//--------------------------------------
//         TRAER TODOS                 |
//--------------------------------------
server.get('/all', isAuth, async (req, res) => {
    const { id } = req.user;
    res.send(await Todo.findAll({ where: { userId: id } }))
})

//--------------------------------------
//         AÑADIR TODOS                |
//--------------------------------------
server.post('/add', isAuth, async (req, res) => {
    const { id } = req.user;
    const { name, description } = req.body;

    if(!name || !description) return res.send('debes pasarme nombre y descripcion')

    const todo = await Todo.create({ name, description })
    res.send((await todo.setUser(id)).dataValues)
})

//--------------------------------------
//         CANCELAR TODOS              |
//--------------------------------------
server.delete('/delete', isAuth, async (req, res) => {
    const { id } = req.user;
    const { idToDo } = req.body;

    if(!Number(idToDo)) return res.send('debes el id del ToDo')

    const del = (await Todo.update({ status: 'canceled' },{ where: { id: idToDo, userId: id} }))[0]
    if(del) return res.send('Se cancelo el ToDo')
    res.status(404).send('No se encontro el todo')
})

//--------------------------------------
//         COMPLETAR TODOS             |
//--------------------------------------
server.post('/complete', isAuth, async (req, res) => {
    const { id } = req.user;
    const { idToDo } = req.body;

    if(!Number(idToDo)) return res.send('debes el id del ToDo')

    const del = (await Todo.update({ status: 'complete' },{ where: { id: idToDo, userId: id} }))[0]
    if(del) return res.send('Se completo el ToDo')
    res.status(404).send('No se encontro el todo')
})

module.exports = server;