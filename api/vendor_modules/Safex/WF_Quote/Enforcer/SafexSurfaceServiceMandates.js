var SafexServiceMandates = require('./SafexServiceMandates');

var SafexSurfaceMandates = function () {
    var safexSurfaceMandates = {};
    safexSurfaceMandates.__proto__ = SafexServiceMandates();
    

    return safexSurfaceMandates;
}

module.exports = SafexSurfaceMandates
