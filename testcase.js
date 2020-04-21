const Model = require('./model')

module.exports = class Testcase extends Model {
    constructor({
        testcase_id,
        scene_id,
        name,
        threads,
        rampupTime,
        rampupSteps,
        duration,
        throughput,
        startupDelay,
        threaditerslimit,
        url
    }) {
        super()
        this.testcaseID = testcase_id
        this.testcase_id = testcase_id
        this.sceneID = scene_id
        this.scene_id = scene_id
        this.name = name
        this.threads = threads
        this.rampuptime = rampupTime
        this.rampupsteps = rampupSteps
        this.duration = duration
        this.throughput = throughput
        this.startupdelay = startupDelay
        this.threaditerslimit = threaditerslimit 
        this.url = url
    }
}