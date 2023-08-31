import { createServer } from 'net';

async function main() {
  const server = createServer().listen(3000);

  server.on('connection', (socket) => {
    socket.on('close', () => {
      console.log(`Client disconnected`);
    });

    socket.on('error', () => {
      //
    });

    setInterval(() => {
      socket.write(new Date().toISOString());
    }, 5000);
  });
}
main();
