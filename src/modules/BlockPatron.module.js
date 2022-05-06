const BlockPatronRequest = require('../requests/BlockPatron')
function BlockPatronModule(payload){
    payload.plusIndex()
    const blockPatronRequest = new BlockPatronRequest()
    return payload
}
module.exports = {BlockPatronModule}