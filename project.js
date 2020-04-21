const Model = require('./model')

module.exports = class Project extends Model {

    constructor({
        proyect_id,
        client_id,
        name,
        description,
        is_active
    }) {
        super()
        this.proyect_id = proyect_id
        this.client_id = client_id
        this.name = name
        this.description = description
        this.is_active = is_active || true
    }

}