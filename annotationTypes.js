const Model = require("./model")
module.exports = class AnnotationType extends Model {
    constructor({
        ID,
        name,
        description
    }) {
        super()
        this.ID = ID
        this.name = name
        this.description = description
    }
}