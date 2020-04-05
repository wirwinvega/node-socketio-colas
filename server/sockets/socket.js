const { io } = require('../server');

const { TicketControl } = require('../classes/ticket-control');

let ticketControl = new TicketControl();

io.on('connection', (client) => {

    client.on('ticket:next', (data, callback) => {
        callback(ticketControl.nextTicket());
    });

    client.emit('ticket:last', { lastTicket: ticketControl.getLastTicket() });

});