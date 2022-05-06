const PatronStatusRequest = require('../requests/PatronStatus')
function PatronStatusModule(payload){
    payload.plusIndex()
    const patronStatusRequest = new PatronStatusRequest(payload.isFinalPipe())
    payload.connection.send(patronStatusRequest.getMessage(), payload.cb);
    return payload
}
module.exports = {PatronStatusModule}