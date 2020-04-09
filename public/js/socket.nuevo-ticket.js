var socket = io();
var label = $("#lblNuevoTicket");

socket.on("connect", function() {
    console.log("Conectado al servidor");
});

socket.on("disconnect", function() {
    console.log("Desconectado del servidor");
});

socket.on('ticket:last', function(data) {
    label.text(data.lastTicket);
});

$("button").on("click", function() {
    socket.emit("ticket:next", null, function(nextTicket) {
        label.text(nextTicket);
    });
});