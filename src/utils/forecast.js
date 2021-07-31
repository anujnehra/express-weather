const request = require("postman-request");

const forecast = (lat, lon, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=a50574f52657048d97884e797ff7e964&query=" +
    lat +
    ",%" +
    lon;

  request(url, function (error, response, body) {
    if (error) {
      callback(error, undefined);
    } else if (response.body.error) {
      callback(error, undefined);
    } else {
      callback(undefined, body);
    }
  });
};

module.exports = forecast;
