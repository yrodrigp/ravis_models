module.exports = class Machine {
    constructor({
        id,
        name,
        dns_public,
        dns_private,
        ip_public,
        ip_private,
        filename_keypair,
        machine_user,
        machine_pwd,
        operation_system,
        description
    }) {
        this.id = id
        this.machine_id = id
        this.name = name
        this.dns_public = dns_public
        this.dns_private = dns_private
        this.ip_private = ip_private
        this.ip_public = ip_public
        this.filename_keypair = filename_keypair
        this.machine_user = machine_user
        this.machine_pwd = machine_pwd
        this.operation_system = operation_system
        this.description = description
    }
}