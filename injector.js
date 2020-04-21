// const Model = require("./model")

module.exports = function ({
    id,
    imageid,
    instanceid,
    instancetype,
    platform,
    publicipaddress,
    publicdnsname,
    privateipaddress,
    privatednsname,
    description,
    keyname,
    threadspercore,
    corecount,
}) {
    this.id = id
    this.keyname = keyname
    this.threadspercore = threadspercore
    this.corecount = corecount
    this.imageid = imageid
    this.instanceid = instanceid
    this.instancetype = instancetype
    this.platform = platform
    this.publicipaddress = publicipaddress
    this.publicdnsname = publicdnsname
    this.privateipaddress = privateipaddress
    this.privatednsname = privatednsname
    this.description = description
}