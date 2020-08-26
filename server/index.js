const express = require('express');
const messageCtrl = require('./controllers/message_controller');

const app = express();

const SERVER_PORT = 3001;

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'));

app.post('/api/messages', messageCtrl.createPost)
app.get('/api/messages', messageCtrl.getMessages)
app.put('/api/messages/:id', messageCtrl.updatePost)
app.delete('/api/messages/:id', messageCtrl.deletePost)



app.listen(SERVER_PORT, () => console.log(`Warp Speed ${SERVER_PORT}`))
