var pipeline = require('pipeline-js');
const {mockPipe} = require("./MapPipe");
const PipeLineHelper = (listPipeLine, data) => {
    let thread = new pipeline()
    listPipeLine.map((pipe) => {
        thread.pipe(
            mockPipe(pipe)
        )
    })
    return thread.process(data)
}
module.exports = {PipeLineHelper}
