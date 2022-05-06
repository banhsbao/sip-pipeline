'use strict';

const RequestMessage = require('../messages/RequestMessage');

class ItemInformationRequest extends RequestMessage {
  constructor(itemIdentifier, identifier) {
    super('17');
    this.identifier = identifier;
    this.itemIdentifier = itemIdentifier;
    this.transactionDate = RequestMessage.getDateTime();
  }

  buildMessage() {
    this.append(this.transactionDate);
    this.append('AO');
    this.append(this.institutionId);
    this.append('|AB');
    this.append(this.itemIdentifier);
    if (this.terminalPassword) {
      this.append('|AC');
      this.append(this.terminalPassword);
    }
  }

}

module.exports = ItemInformationRequest;
