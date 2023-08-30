import { Socket, createServer } from 'net';
const sockets: Socket[] = [];
async function main() {
  const server = createServer().listen(3000);

  server.on('connection', (socket) => {
    sockets.push(socket);
    //socket.
    console.log('RODANDO');

    socket.on('end', () => {
      console.log('fecho');
    });

    socket.on('close', () => {
      console.log('CLIENTE DISCONECTOU');
    });

    socket.on('error', (err) => {
      console.log('CONEXÂO PERDIDADE');
    });

    socket.on('data', (data) => {
      console.log('DATA', socket.remoteAddress, data.toString('utf-8'));

      sockets.forEach(function (sock, index, array) {
        sock.write(
          sock.remoteAddress + ':' + sock.remotePort + ' said ' + data + '\n',
        );
      });
    });

    //socket.write('hello');
    //socket.on('connect', () => );
  });
}
main();
