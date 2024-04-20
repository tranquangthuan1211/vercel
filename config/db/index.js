require('dotenv').config()
const mongoose = require('mongoose')
async function connect () {
    try {
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,  
        })
        console.log("connect successfully!!!")
    }catch(error){
        console.log(error)
    }
}

module.exports = {connect}