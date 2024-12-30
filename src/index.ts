import express from 'express';
import http from 'http';
import route from './app/routes/route';
import { WebSocketService } from './app/services/web.socket.service';

const app = express();
const server = http.createServer(app);
const websocketService = new WebSocketService();

app.use(express.json());
app.use('/smartwatering', route);

websocketService.setup(server);

server.listen(2001, () => {
  console.log('Server listening on port 2001');
});
