const { io } = require('../server');
<<<<<<< HEAD

const { TicketControl } = require('../classes/ticket-control');

=======
const { TicketControl } = require('../classes/ticket-control');


>>>>>>> 5c197e91f296dfeb1bcbec63ee88da5487af27cd
let ticketControl = new TicketControl();

io.on('connection', (client) => {

    client.on('ticket:next', (data, callback) => {
        callback(ticketControl.nextTicket());
    });

<<<<<<< HEAD
    client.emit('ticket:last', { lastTicket: ticketControl.getLastTicket() });
=======
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
>>>>>>> 5c197e91f296dfeb1bcbec63ee88da5487af27cd

});