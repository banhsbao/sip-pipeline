const {Payload} = require("./payloads/Payload");
const {PipeLineHelper} = require("./utils/PipeLineHelper");
const Connection = require("./utils/Connection")

let host = ''
let port = ''
let listPipeLine = [1, 2, 3]
let username = ''
let password = ''
let locationCode = ''

const con = new Connection(host, port);
const cb = (err, res) => {
    console.log("Error: " + err, res);
}
con.connect(cb);

const payload = new Payload(con, host, port, username, password, locationCode, cb, listPipeLine)
PipeLineHelper(listPipeLine, payload)


