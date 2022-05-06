const PatronInformationRequest = require('../requests/PatronInformation')
function PatronInformationModule(payload){
    payload.plusIndex()
    const type = 'hold';
    const patronInformationRequest = new PatronInformationRequest(type, 1, 2,payload.isFinalPipe());
    patronInformationRequest.sequence = ++payload.sequence;
    patronInformationRequest.institutionId = 'OBA';
    patronInformationRequest.patronIdentifier = '201234567801';
    payload.connection.send(patronInformationRequest.getMessage(), payload.cb);
    return payload
}
module.exports = {PatronInformationModule}
