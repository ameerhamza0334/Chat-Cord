const mongoose = require('mongoose');

const uri = "mongodb+srv://ameer:NtFEg1TmqvxHqDbS@cluster0.qdjnd.mongodb.net/Chat-Cord?retryWrites=true&w=majority";

mongoose.connect(uri, (err) => {
    console.log(err);
})

module.exports = mongoose;