const mongoose = require('mongoose')

const connect = ()=>{
    mongoose.connect("mongodb+srv://adityablog:aditya123@cluster0.wsqsq.mongodb.net/?retryWrites=true&w=majority");
}

module.exports = connect;
