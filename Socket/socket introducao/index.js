const express = require('express');
const app = express();
const path = require('path')
const socketIO = require('socket.io')

app.use('/', express.static(path.join(__dirname, 'public')))

const server = app.listen(3000, () => {
    console.log('running')
})
// IO significa input e output
// o IO fica vendo se tem algo chegando e repsonde se necessario
const io = socketIO(server)

// Socket eh a conexao do front end com o back end, cada navegador que ta se conectando com o backend vai ser um socket diferente
// socket eh tipo uma representacao do navegador
io.on('connection', (socket)=>{

    socket.broadcast.emit('fodase', {msg: "chegou um novo usuario"})

})