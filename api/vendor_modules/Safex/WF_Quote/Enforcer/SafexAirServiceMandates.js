var SafexServiceMandates = require('./SafexServiceMandates');

var SafexAirMandates = function () {
    var safexAirMandates = {};
    safexAirMandates.__proto__ = SafexServiceMandates();

    return safexAirMandates;
}

module.exports = SafexAirMandates;