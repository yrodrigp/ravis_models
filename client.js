const Model = require('./model')
const uuid = require('uuid')

module.exports = class Client extends Model {
    constructor({
        client_id,
        name,
        description,
        is_active,
        private_name,
    }) {
        super()
        this.client_id = client_id
        this.name = name
        this.description = description
        this.schema_client = name && `CLIENT_${name.toString().toUpperCase()}` //deprecated
        this.is_active = is_active || true
        this.private_name = private_name
    }
}