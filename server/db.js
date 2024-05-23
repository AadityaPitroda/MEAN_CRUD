const mongoose = require('mongoose')

const dbUri = 'mongodb+srv://Mongo_First:Mongo_First@cluster0.srck6ow.mongodb.net/employe_db?retryWrites=true&w=majority&appName=Cluster0'

mongoose.set('strictQuery',false)

module.exports = () => {
    return mongoose.connect(dbUri,{ useNewUrlParser: true, useUnifiedTOpology: true})

}