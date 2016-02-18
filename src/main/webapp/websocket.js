var wsUri = "ws://" + document.location.host + document.location.pathname + "whiteboardendpoint";
var websocket = new WebSocket(wsUri);
var output = document.getElementById("output");

websocket.onmessage = function (evt) {
    onMessage(evt);
};

websocket.onopen = function (evt) {
    onOpen(evt);
};

websocket.onerror = function (evt) {
    onError(evt);
};

function writeToScreen(message) {
    output.innerHTML += message + "<br>";
}

function onError(evt) {
    writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
}

function onOpen(evt) {
    writeToScreen('<span style="color: green;">Connected to ' + wsUri + '</span> ');
}

function onMessage(evt) {
    console.log("received: " + evt.data);
    drawImageText(evt.data);
}

function sendText(json) {
    console.log("sending text: " + json);
    websocket.send(json);
}

