const mongoose = require('mongoose')
const connect = ()=>{
    // need to add db url
    mongoose.connect('connect')
}
module.exports = connect