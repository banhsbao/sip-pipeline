'use strict';

const RequestMessage = require('../messages/RequestMessage');

class RequestResendRequest extends RequestMessage {
  constructor(identifier) {
    super('97');
    this.identifier = identifier;
    this.includeSequenceNumber = false;
  }

  buildMessage() {
  }

}

module.exports = RequestResendRequest;
