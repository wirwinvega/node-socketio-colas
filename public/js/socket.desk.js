var socket = io();
var label = $("#lblNuevoTicket");

let searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has('desk')) {
    window.location = 'index.html';
    throw new Error("Desk is required");
}

let desk = searchParams.get('desk');

$("h1").text('Escritorio ' + desk);

$('button').on('click', function() {

    socket.emit('ticket:attend', {desk}, (resp) => {
        if (resp === 'No more tickets pending') {
            $('small').text(resp);
            alert(resp);
            return;
        }
        $('small').text(resp.number);
        console.log(resp);
    });

});