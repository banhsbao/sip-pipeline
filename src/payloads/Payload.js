class Payload {
    constructor(connection, cb) {
        this.connection = connection
        this.host = 'count.intelligentrfid.com.au';
        this.Port = 6002;
        this.username = 'LoginUserID';
        this.password = 'LoginPassword';
        this.locationCode = 'Location Institution ID';
        this.sequence = 0;
        this.request = {};
        this.response = {};
        this.events = [];
        this.cb = cb;
    }
}

module.exports = {Payload}
