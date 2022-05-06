const {LoginModule} = require("../modules/Login.module");
const {PatronInformationModule} = require("../modules/PatronInformation.module");
const {PatronStatusModule} = require("../modules/PatronStatus.module");
const {BlockPatronModule} = require("../modules/BlockPatron.module");
const {CheckinModule} = require("../modules/Checkin.module");
const {CheckoutModule} = require("../modules/Checkout.module");
const {EndPatronSessionModule} = require("../modules/EndPatronSession.module");
const {FreePaidModule} = require("../modules/FreePaid.module");
const {ItemInformationModule} = require("../modules/ItemInformation.module");
const {PatronEnableModule} = require("../modules/PatronEnable.module");
const {RequestResendModule} = require("../modules/RequestResend.module");
const {SCStatusModule} = require("../modules/SCStatus.module");
const mapPipe = (pipe) => {
    switch (pipe){
        case 1:
            return LoginModule
        case 2:
            return PatronInformationModule
        case 3:
            return PatronStatusModule
        case 4:
            return BlockPatronModule
        case 5:
            return CheckinModule
        case 6:
            return CheckoutModule
        case 7:
            return EndPatronSessionModule
        case 8:
            return FreePaidModule
        case 9:
            return ItemInformationModule
        case 10:
            return PatronEnableModule
        case 11:
            return PatronStatusModule
        case 12:
            return RequestResendModule
        case 13:
            return SCStatusModule
        default:
            console.log("err")
            break
    }
}
module.exports = {mockPipe: mapPipe}
