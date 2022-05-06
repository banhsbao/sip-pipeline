'use strict';

const RequestMessage = require('../messages/RequestMessage');

class BlockPatronRequest extends RequestMessage {
  constructor(cardRetained, blockedCardMessage, isFinalPipe) {
    super('01');
    this.isFinalPipe = isFinalPipe;
    this.retained = cardRetained;
    this.blockedCardMessage = blockedCardMessage;
    this.transactionDate = RequestMessage.getDateTime();
  }

  buildMessage() {
    this.append(this.cardRetained ? 'Y' : 'N');
    this.append(this.transactionDate);
    this.append('AO');
    this.append(this.institutionId);
    this.append('|AL');
    this.append(this.blockedCardMessage);
    this.append('|AA');
    this.append(this.patronIdentifier);
    this.append('|AC');
    this.append(this.terminalPassword);
  }
}

module.exports = BlockPatronRequest;
