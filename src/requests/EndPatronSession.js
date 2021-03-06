'use strict';

const RequestMessage = require('../messages/RequestMessage');

class EndPatronSessionRequest extends RequestMessage {
    constructor(institutionId, patronIdentifier, terminalPassword, patronPassword, identifier) {
        super('35');
        this.identifier = identifier;
        this.institutionId = institutionId;
        this.patronIdentifier = patronIdentifier;
        this.terminalPassword = terminalPassword;
        this.patronPassword = patronPassword;
        this.transactionDate = RequestMessage.getDateTime();
    }

    buildMessage() {
        this.append(this.transactionDate);
        this.append('AO');
        this.append(this.institutionId);
        this.append('|AA');
        this.append(this.patronIdentifier);
        if (this.terminalPassword) {
            this.append('|AC');
            this.append(this.terminalPassword);
        }
        if (this.patronPassword) {
            this.append('|AD');
            this.append(this.patronPassword);
        }
    }
}

module.exports = EndPatronSessionRequest;
