const message = require('../models/message.model');

const getMessagesFromDb = async () => {
    return new Promise((resolve, reject) => {
        message.find((err, messages) => {
            if (messages) {
                resolve(messages);
            } else if (err) {
                reject(err);
            }
            else {
                throw new Error('Data Not Found')
            }
        });
    })
}

const postMessagesToDb = async (requestMessage) => {
    let dbResponse = await message.create(requestMessage);
    console.log(dbResponse);
    return dbResponse;
}

module.exports = { getMessagesFromDb, postMessagesToDb }