class Payload {
    constructor(connection, host, port,username, password,locationCode, cb, array) {
        this.connection = connection
        this.host = host;
        this.Port = port;
        this.username = username;
        this.password = password;
        this.locationCode = locationCode;
        this.array = array;
        this.index = 0;
        this.sequence = 0;
        this.cb = cb;
    }

    plusIndex() {
        this.index++
    }

    isFinalPipe() {
        return this.array.length === this.index
    }
}

module.exports = {Payload}
