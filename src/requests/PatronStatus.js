'use strict';

const RequestMessage = require('../messages/RequestMessage');

class PatronStatusRequest extends RequestMessage {
  constructor(isFinalPipe) {
    super('23');
    this.isFinalPipe = isFinalPipe;
    this.transactionDate = RequestMessage.getDateTime();
  }

  buildMessage() {
    this.append(this.language);
    this.append(this.transactionDate);
    this.append('AO');
    this.append(this.institutionId);
    this.append('|AA');
    this.append(this.patronIdentifier);
    this.append('|AC');
    this.append(this.terminalPassword);
    this.append('|AD');
    this.append(this.patronPassword);
  }

}

module.exports = PatronStatusRequest;
