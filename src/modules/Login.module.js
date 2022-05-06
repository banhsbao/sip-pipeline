const LoginRequest = require('../requests/Login')
function LoginModule(payload) {
    //do something
    const loginRequest = new LoginRequest(payload.username, payload.password, payload.locationCode)
    loginRequest.sequence = ++payload.sequence;
    payload.connection.send(loginRequest.getMessage()+'\r', payload.cb)
    return payload;
}

module.exports = {LoginModule}
