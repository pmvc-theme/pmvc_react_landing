process.env.node_env = 'productioni';
const fs = require('fs');
const fd = process.stdin.fd;
let buffer = fs.readSync(fd, 40960)[0];
let context='';
while(buffer){
    context += buffer;
    buffer  = fs.readSync(fd, 40960)[0];
}

require('./assets/node.bundle.js');
const ReactServer = global.reactServer;
const MyApp = global.app;
const myJson = JSON.parse(context);
const tmp = ReactServer.renderToString(MyApp(
    myJson 
));
process.stdout.write('<!--start-->');
const len = tmp.length;
let last=0;
while(last < len){
    process.stdout.write(tmp.substr(last,1000));
    last+=1000;
}


