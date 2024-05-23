const mongoose = require('mongoose')

const dbUri = 'MongoDB_Atlas_Cluster_Link_here'

mongoose.set('strictQuery',false)

module.exports = () => {
    return mongoose.connect(dbUri,{ useNewUrlParser: true, useUnifiedTOpology: true})

}
