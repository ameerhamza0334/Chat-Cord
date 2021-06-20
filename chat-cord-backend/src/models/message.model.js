const db = require('../config/db.connection');

var Message = db.model('messages', {
    name: String,
    message: String
});


module.exports = Message;