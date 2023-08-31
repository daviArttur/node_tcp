import { createConnection } from 'net';

function connectClient() {
  const clientConnection = createConnection({
    host: '127.0.0.1',
    port: 3000,
  });

  clientConnection.on('connect', () => {
    console.log('connected');
  });

  clientConnection.on('data', (data) => {
    console.log(data.toString('utf-8'));
  });

  return clientConnection;
}
connectClient();
