const LoginRequest = require('../requests/Login')
function LoginModule(payload) {
    payload.plusIndex()
    const loginRequest = new LoginRequest(payload.username, payload.password, payload.locationCode, payload.isFinalPipe())
    loginRequest.sequence = ++payload.sequence;
    payload.connection.send(loginRequest.getMessage(), payload.cb)
    return payload;
}

module.exports = {LoginModule}
