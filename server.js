const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/obs', (req, res) => {
  res.sendFile(path.join(__dirname, 'obs.html'));
});

app.get('/obs.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'obs.html'));
});

wss.on('connection', (ws) => {
  console.log('Client connected. Total:', wss.clients.size);

  ws.on('message', (message) => {
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message.toString());
      }
    });
  });

  ws.on('close', () => {
    console.log('Client disconnected. Total:', wss.clients.size);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});