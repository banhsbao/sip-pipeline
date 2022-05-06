'use strict';

const RequestMessage = require('../messages/RequestMessage');
const StatusCode = require('../variables/StatusCode');

class SCStatusRequest extends RequestMessage {
  constructor(status, maxPrintWidth, protocolVersion, identifier) {
    super('99');
    this.identifier = identifier;
    this.statusCode = status || StatusCode.OK;
    this.maxPrintWidth = maxPrintWidth || '000';
    this.protocolVersion = protocolVersion || '2.00';
  }

  buildMessage() {
    this.append(this.statusCode);
    this.append(this.maxPrintWidth);
    this.append(this.protocolVersion);
  }

}

module.exports = SCStatusRequest;
