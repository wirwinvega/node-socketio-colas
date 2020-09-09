const fs = require('fs');

class Ticket {
    constructor(number, desk) {
        this.number = number;
        this.desk = desk;
    }
}

class TicketControl {

    constructor() {
        this.last = 0;
        this.today = new Date().getDate();
        this.tickets = [];
<<<<<<< HEAD
=======
        this.lastFourTickets = []
>>>>>>> 5c197e91f296dfeb1bcbec63ee88da5487af27cd

        let data = require('../data/data.json');
        if (this.today === data.today) {
            this.last = data.last;
            this.tickets = data.tickets;
<<<<<<< HEAD
=======
            this.lastFourTickets = data.lastFourTickets;
>>>>>>> 5c197e91f296dfeb1bcbec63ee88da5487af27cd
        } else {
            this.resetCount();
        }

    }

    nextTicket() {
        this.last += 1;
        let ticket = new Ticket(this.last, null);
        this.tickets.push(ticket);
        this.saveFile();
        return `Ticket No. ${this.last}`;
    }

    getLastTicket() {
        return `Ticket No. ${this.last}`;
    }

<<<<<<< HEAD
    resetCount() {
        this.last = 0;
        this.tickets = [];
=======
    getLastFourTickets() {
        return this.lastFourTickets;
    }

    attendTicket(desk) {
        if (this.tickets.length === 0) {
            return "No more tickets pending";
        }

        let numTicket = this.tickets[0].number;
        this.tickets.shift();

        let attendTicket = new Ticket(numTicket, desk);
        
        this.lastFourTickets.unshift(attendTicket);

        if (this.lastFourTickets.length > 4) {
            this.lastFourTickets.splice(-1,1);
        }

        this.saveFile();

        return attendTicket;

    }

    resetCount() {
        this.last = 0;
        this.tickets = [];
        this.lastFourTickets = [];
>>>>>>> 5c197e91f296dfeb1bcbec63ee88da5487af27cd
        this.saveFile();
        console.log("Se ha inicializado el sistema.");
    }

    saveFile() {
        let dataJson = JSON.stringify({
            "last": this.last,
            "today": this.today,
<<<<<<< HEAD
            "tickets": this.tickets
=======
            "tickets": this.tickets,
            "lastFourTickets": this.lastFourTickets
>>>>>>> 5c197e91f296dfeb1bcbec63ee88da5487af27cd
        });

        fs.writeFileSync('./server/data/data.json', dataJson);
    }

}

module.exports = {
    TicketControl
}