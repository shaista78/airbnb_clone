const app = require('./index.js');
const connect = require('./configs/db.js')
app.listen(3000,async()=>{
   // await connect()
    console.log('listen port number')
})
