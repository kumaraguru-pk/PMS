var GatiServiceMandates = require('./GatiServiceMandates');

var GatiSurfaceMandates = function () {
    var gatiSurfaceMandates = {};
    gatiSurfaceMandates.__proto__ = GatiServiceMandates();
  
    return gatiSurfaceMandates;
}

module.exports = GatiSurfaceMandates
