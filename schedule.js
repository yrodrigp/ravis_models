const Model = require('./model')
class Schedule extends Model {
    constructor({
        id,
        schedule_id,
        scheduleId,
        scene_id,
        sceneId,
        date_from,
        dateFrom,
        date_to,
        dateTo,
        status_id,
        statusId,
        alias
    }) {
        super()
        this.schedule_id = schedule_id || scheduleId || id
        this.scheduleID = schedule_id || id
        this.scene_id = scene_id || sceneId
        this.sceneID = scene_id || sceneId
        this.date_from = date_from || dateFrom
        this.date_to = date_to || dateTo
        this.status_id = status_id || 0
        this.statusID = status_id || statusId || 0
        this.alias = alias || ""
    }
}
module.exports = Schedule