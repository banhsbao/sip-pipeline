const {Payload} = require("./payloads/Payload");
const {PipeLineHelper} = require("./utils/PipeLineHelper");

const Connection = require("./utils/Connection")
const cb = (err, res) => {
    // console.log("Error: " + err, res);
}
con.connect(cb);
const payload = new Payload(con, cb)
PipeLineHelper([1,2], payload)
