const PatronInformationRequest = require('../requests/PatronInformation')
function PatronInformationModule(payload){
    const type = 'hold';
    const patronInformationRequest = new PatronInformationRequest(type, 1, 2);
    patronInformationRequest.sequence = ++payload.sequence;
    patronInformationRequest.institutionId = 'OBA';
    patronInformationRequest.patronIdentifier = '201234567801';
    payload.connection.send(patronInformationRequest.getMessage()+'\r\n', payload.cb);
    return payload
}
module.exports = {PatronInformationModule}
