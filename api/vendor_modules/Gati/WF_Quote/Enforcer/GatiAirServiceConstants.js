var GatiServiceConstants = require('./GatiServiceConstants');

var GatiAirServiceConstants = function () {
     console.log("SafexAirServiceConstants");
    var gatiAirServiceConstants = {}
    gatiAirServiceConstants.__proto__ = GatiServiceConstants();
    gatiAirServiceConstants.volumetricConstant = 5000;
    gatiAirServiceConstants.volumetricdelta = 6;
    gatiAirServiceConstants.__proto__.minimumChargeableWeight = 5;
    return gatiAirServiceConstants;
}


module.exports = GatiAirServiceConstants;