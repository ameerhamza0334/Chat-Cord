const responseHanlder = require('../config/api.response');

const handleError = (err, res) => {
    console.error(err);
    responseHanlder.apiError(res, 'There has been an error', null, err, 500);
}

module.exports = handleError;