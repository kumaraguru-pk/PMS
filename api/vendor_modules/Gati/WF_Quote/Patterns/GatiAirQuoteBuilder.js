var BaseClass =  require('./GatiSurfaceQuoteBuilder');

var GatiAirQuoteBuilder = function (Constraints, SrvMandates, SrvConstants) {
    var gatiAirQuoteBuilder = {}
    gatiAirQuoteBuilder.__proto__ = new BaseClass(Constraints, SrvMandates, SrvConstants);
    gatiAirQuoteBuilder.__proto__.ServiceType = 'Air';
    return gatiAirQuoteBuilder;
}


   
module.exports = GatiAirQuoteBuilder;