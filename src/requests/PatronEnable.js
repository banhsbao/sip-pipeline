'use strict';

const RequestMessage = require('../messages/RequestMessage');

class PatronEnableRequest extends RequestMessage {
  constructor(identifier) {
    super('25');
    this.identifier = identifier;
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

module.exports = PatronEnableRequest;
