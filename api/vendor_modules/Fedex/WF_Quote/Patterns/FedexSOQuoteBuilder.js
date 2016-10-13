var BaseClass =  require('./FedexPOQuoteBuilder');

var FedexSOQuoteBuilder = function (Constraints, SrvMandates, SrvConstants) {
    var fedexSOQuoteBuilder = {}
    fedexSOQuoteBuilder.__proto__ = new BaseClass(Constraints, SrvMandates, SrvConstants);
    fedexSOQuoteBuilder.__proto__.ServiceType = 'Standard_Overnight';
    console.log('FedexSOQuoteBuilder Constants WeightSlab ' + SrvConstants.weightSlabs);
    return fedexSOQuoteBuilder;
}
module.exports = FedexSOQuoteBuilder;