const Model = require('./model')

module.exports = class Scene extends Model {

    constructor({
        id,
        scene_id,
        proyect_id,
        name,
        version,
        father_scene_id,
        type,
        total_threads,
        total_testcases,
        timeout,
        annotation,
        is_active,
        url
    }) {
        super()
        this.scene_id = scene_id || id
        this.proyect_id = proyect_id
        this.name = name
        this.version = version || '0.0.1'
        this.father_scene_id = father_scene_id || null
        this.type = type
        this.total_threads = total_threads || 0
        this.total_testcases = total_testcases || 0
        this.timeout = timeout || 160
        this.annotation = annotation
        this.is_active = is_active || true
        this.url = url || 'http://'
    }
}