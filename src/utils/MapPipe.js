const {LoginModule} = require("../modules/Login.module");
const {PatronInformationModule} = require("../modules/PatronInformation");
const mapPipe = (pipe) => {
    switch (pipe){
        case 1:
            return LoginModule
            break
        case 2:
            return PatronInformationModule
            break
        default:
            console.log("err")
            break
    }
}
module.exports = {mockPipe: mapPipe}
