const Model = require('./model')

module.exports = class Execution extends Model {
    constructor({
        execution_id,
        scene_id,
        testcase_id,
        timestart,
        timeend,
        timestop,
        result_code,
        result_message,
        result_path,
        alias
    }) {
        super()
        this.execution_id = execution_id
        this.executionID = execution_id
        this.scene_id = scene_id
        this.sceneID = scene_id
        this.testcase_id = testcase_id
        this.testcaseID = testcase_id
        this.timestart = timestart
        this.timestop = timestop
        this.timeend = timeend
        this.result_code = result_code || 0
        this.result_message = result_message
        this.result_path = result_path
        this.alias = alias || ""
    }
}