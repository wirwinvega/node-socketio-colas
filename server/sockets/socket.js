const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control');


let ticketControl = new TicketControl();

io.on('connection', (client) => {

    client.on('ticket:next', (data, callback) => {
        callback(ticketControl.nextTicket());
    });

    client.emit('ticket:last', { 
        lastTicket: ticketControl.getLastTicket(),
        lastFourTickets : ticketControl.getLastFourTickets()
    });

    client.on('ticket:attend', (data, callback) => {

        if (!data.desk) {
            return callback({
                "err": true,
                "message": "Desk parameter es required"
            });
        }

        let attendTicket = ticketControl.attendTicket(data.desk);

        callback(attendTicket);

        client.broadcast.emit('ticket:last', {
            lastTicket: ticketControl.getLastTicket(),
            lastFourTickets: ticketControl.getLastFourTickets()
        });

    });

});