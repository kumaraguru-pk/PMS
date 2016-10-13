var SafexServiceConstants = require('./SafexServiceConstants');

var SafexAirServiceConstants = function () {
     console.log("SafexAirServiceConstants");
    var safexAirServiceConstants = {}
    safexAirServiceConstants.__proto__ = SafexServiceConstants();
    safexAirServiceConstants.volumetricdelta = 6;
    safexAirServiceConstants.__proto__.minimumChargeableWeight = 10;
    return safexAirServiceConstants;
}


module.exports = SafexAirServiceConstants;