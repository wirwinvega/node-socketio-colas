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

        let data = require('../data/data.json');
        if (this.today === data.today) {
            this.last = data.last;
            this.tickets = data.tickets;
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

    resetCount() {
        this.last = 0;
        this.tickets = [];
        this.saveFile();
        console.log("Se ha inicializado el sistema.");
    }

    saveFile() {
        let dataJson = JSON.stringify({
            "last": this.last,
            "today": this.today,
            "tickets": this.tickets
        });

        fs.writeFileSync('./server/data/data.json', dataJson);
    }

}

module.exports = {
    TicketControl
}