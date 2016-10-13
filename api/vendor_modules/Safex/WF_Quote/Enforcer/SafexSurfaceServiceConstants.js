var SafexServiceConstants = require('./SafexServiceConstants');

var SafexSurfaceServiceConstants = function () {
    console.log("safexSurfaceServiceConstants");
    var safexSurfaceServiceConstants = {}
    safexSurfaceServiceConstants.__proto__ = SafexServiceConstants();
    safexSurfaceServiceConstants.__proto__.volumetricdelta = 10;
    safexSurfaceServiceConstants.__proto__.minimumChargeableWeight = 20;
    return safexSurfaceServiceConstants;
}


module.exports = SafexSurfaceServiceConstants;