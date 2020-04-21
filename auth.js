const Model = require("./model")

module.exports = class Auth extends Model {
    constructor({
        Name,
        Description
    }) {
        super()
        this.Name = Name
        this.Description = Description
    }
}