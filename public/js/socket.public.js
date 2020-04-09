var socket = io();

let lblTicket1 = $('#lblTicket1');
let lblTicket2 = $('#lblTicket2');
let lblTicket3 = $('#lblTicket3');
let lblTicket4 = $('#lblTicket4');

let lblDesk1 = $('#lblEscritorio1');
let lblDesk2 = $('#lblEscritorio2');
let lblDesk3 = $('#lblEscritorio3');
let lblDesk4 = $('#lblEscritorio4');

let tickets = [lblTicket1, lblTicket2, lblTicket3, lblTicket4];
let desks = [lblDesk1, lblDesk2, lblDesk3, lblDesk4];

socket.on('ticket:last', function(data) {
    let audio = new Audio('audio/new-ticket.mp3');
    audio.play();
    updateHTML(data.lastFourTickets);
});

function updateHTML(lastFourTickets) {
    for (let i = 0; i < lastFourTickets.length; i++) {
        tickets[i].text('Ticket ' + lastFourTickets[i].number);
        desks[i].text('Escritorio ' + lastFourTickets[i].desk);
    }
}