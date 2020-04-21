module.exports = class Model {

    JSON(data) {
        return JSON.stringify(data)
    }

    getStorageRoom() {
        return this._storage
    }

    addToStorageRoom(obj) {
        this._storage = {
            ...this._storage,
            ...obj
        }
    }
    
}