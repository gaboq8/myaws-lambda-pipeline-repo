var time = require('time');

exports.handler = (event, context, callback) => {
    var currentTime = new time.Date();
    currentTime.setTimezone("America/New_York");
    callback(null, {
        statusCode: '200',
        body: 'La hora exacta en New York es: ' + currentTime.toString(),
    });
};