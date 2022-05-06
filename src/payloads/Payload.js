class Payload {
    constructor(connection, cb) {
        this.connection = connection
        this.sequence = 0;
        this.request = {};
        this.response = {};
        this.events = [];
        this.cb = cb;
    }
}

module.exports = {Payload}
