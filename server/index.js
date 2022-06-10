const express = require('express');
const app = express();
const mc = require('./controllers/messages_controller')

app.use(express.json());

express.static(path.join(__dirname, + '../public/build'))

const messagesURL = '/api/messages';


app.post(messagesURL, mc.create)
app.get(messagesURL, mc.read)
app.put(`${messagesURL}/:id`, mc.update)
app.delete(`${messagesURL}/:id`, mc.delete)




const SERVER_PORT = 3001;
app.listen(SERVER_PORT, () => {
    console.log(`listening on port ${port}`)
})