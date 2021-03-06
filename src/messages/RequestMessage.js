'use strict';

const Message = require('./Message');

class RequestMessage extends Message {

    constructor(identifier, isFinalPipe) {
        super();
        // Command identifier
        this.identifier = identifier;
        this.isFinalPipe = isFinalPipe;
        // Build message
        this.message = '';
        // Delimiter
        this.delimiter = '|';
        // Location code
        this.locationCode = '';
        // Institution id
        this.institutionId = '';
        // Terminal password
        this.terminalPassword = '';
        // Patron identifier
        this.patronIdentifier = '';
        // Patron password
        this.patronPassword = '';
        // Language
        this.language = '001';

        // Maximum retries
        this.maxRetries = 3;

        // Error detection
        this.errorDetection = true;

        // Sequence number
        this.sequence = 0;
        if (this.sequence > 9) {
            this.sequence = 0;
        }
        this.includeSequenceNumber = true;
    }

    append(value) {
        if (value) {
            this.message += value;
        }
    }

    buildMessage() {
        throw new Error('Method needs to be implemented by sub class');
    }

    getMessage() {
        this.message = '';
        if (this.identifier) {
            this.append(this.identifier);
        }

        this.buildMessage();

        if (this.errorDetection) {
            if (this.includeSequenceNumber) {
                this.append(`|AY${this.sequence}`);
            }
            this.append('AZ');
            const checksum = Message.getChecksum(this.message);
            this.append(checksum);
        }
        if (this.isFinalPipe) {
            this.message = this.message + '\r'
        } else {
            this.message = this.message + '\r\n'
        }
        return this.message;
    }

}

module.exports = RequestMessage;
