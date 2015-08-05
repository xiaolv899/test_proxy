/**
 * Created by yecl on 15/8/5.
 */
var WebSocketServer = require('websocket').server;
var http = require('http'),
    express = require('express'),
    engine = require('hjs'),
    path = require('path');

var app = express(),
    router = express.Router();

router.get('/', function(req, res, next){
    res.render('send.html');
});

app.engine('html', engine.__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','html');

app.use('/', router);

/*var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);

    if(request.url === '/'){
        response.write('<h1>发送消息</h1>');
        response.end();
    }
    response.writeHead(404);
    response.end();
});*/
var server = http.createServer(app);
server.listen(8080, function() {
    console.log('%s Server is listening on port 8080', new Date());
});

//console.log('% nihao', {'a':'b','b': 'c'});

wsServer = new WebSocketServer({
    httpServer: server,
    // You should not use autoAcceptConnections for production
    // applications, as it defeats all standard cross-origin protection
    // facilities built into the protocol and the browser.  You should
    // *always* verify the connection's origin and decide whether or not
    // to accept it.
    autoAcceptConnections: false
});

function originIsAllowed(origin) {
    // put logic here to detect whether the specified origin is allowed.
    return true;
}

wsServer.on('request', function(request) {
    if (!originIsAllowed(request.origin)) {
        // Make sure we only accept requests from an allowed origin
        request.reject();
        console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
        return;
    }

    var connection = request.accept(null, request.origin);//echo-protocol
    console.log((new Date()) + ' Connection accepted.', request.key);
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            console.log('Received Message: ',  message.utf8Data);
            connection.sendUTF('from server. client message: '+message.utf8Data);
        }
        else if (message.type === 'binary') {
            console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
            connection.sendBytes(message.binaryData);
        }
    });
    connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
});