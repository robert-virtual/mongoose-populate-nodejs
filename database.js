const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/socialmediadb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db = mongoose.connection

db.on('error',error => {
    console.log('Error:',error);
})

db.on('open', ()=> {
    console.log('conectado a mongo db')
})


module.exports = db