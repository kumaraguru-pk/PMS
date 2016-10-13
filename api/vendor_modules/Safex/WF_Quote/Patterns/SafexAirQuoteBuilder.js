var BaseClass =  require('./SafexSurfaceQuoteBuilder');

var SafexAirQuoteBuilder = function (Constraints, SrvMandates, SrvConstants) {
    var safexAirQuoteBuilder = {}
    safexAirQuoteBuilder.__proto__ = new BaseClass(Constraints, SrvMandates, SrvConstants);
    safexAirQuoteBuilder.__proto__.ServiceType = 'Air';
    return safexAirQuoteBuilder;
}


   
module.exports = SafexAirQuoteBuilder;