var GatiServiceConstants = require('./GatiServiceConstants');

var GatiSurfaceServiceConstants = function () {
    console.log("safexSurfaceServiceConstants");
    var gatiSurfaceServiceConstants = {}
    gatiSurfaceServiceConstants.__proto__ = GatiServiceConstants();
    gatiSurfaceServiceConstants.volumetricConstant= 27000;
    gatiSurfaceServiceConstants.volumetricdelta = 10;
    gatiSurfaceServiceConstants.__proto__.minimumChargeableWeight = 10;
    return gatiSurfaceServiceConstants;
}


module.exports = GatiSurfaceServiceConstants;