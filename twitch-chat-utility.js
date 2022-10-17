const WebSocketClient = require('websocket').client;
const client = new WebSocketClient();

client.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
});

client.on('connect', function(connection) {
    console.log('WebSocket Client Connected');
    
    // connection.sendUTF('CAP REQ :twitch.tv/membership twitch.tv/tags twitch.tv/commands');
    connection.sendUTF('PASS oauth:yfvzjqb705z12hrhy1zkwa9xt7v662');
    connection.sendUTF('NICK myusername');

    connection.sendUTF('JOIN #bar,#foo');});

client.connect('ws://irc-ws.chat.twitch.tv:80');