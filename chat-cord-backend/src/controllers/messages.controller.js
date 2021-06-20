const messageService = require('../services/messages.service');
const responseHandler = require('../config/api.response');
const io = require('../config/socket.connection');

const getMessages = async (req, res, next) => {
    try {
        let serviceResp = await messageService.getMessagesFromDb();
        responseHandler.apiSuccess(res, serviceResp);
    } catch (error) {
        next(error);
    }
}

const postMessages = async (req, res, next) => {
    try {
        let serviceResp = await messageService.postMessagesToDb(req.body);
        io.emit('message', req.body);
        responseHandler.apiSuccess(res, serviceResp);
    } catch (error) {
        next(error);
    }
}

module.exports = { getMessages, postMessages }