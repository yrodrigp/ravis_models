const Model = require("./model")

module.exports = class Annotation extends Model {
    constructor({
        ID,
        name,
        time,
        content,
        isGeneral,
        sceneID,
        executionID,
        annotationTypeID
    }) {
        super()
        this.ID = ID
        this.name = name
        this.time = time
        this.content = content
        this.isGeneral = isGeneral
        this.sceneID = sceneID
        this.executionID = executionID
        this.annotationTypeID = annotationTypeID
    }
}