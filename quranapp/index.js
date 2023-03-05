const app = require('express');
var path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/imam', (req, res) => {
  res.sendFile(__dirname + '/imam.html');
});

io.on('connection', (socket) => {
  socket.on('imam', data => {
    io.emit('page', data);
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});