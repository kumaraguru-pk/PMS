var FedexQuoteMandates = require('./FedexQuoteMandates');

var FedexSOQuoteMandates = function () {
    var fedexSOQuoteMandates = {};
    fedexSOQuoteMandates.__proto__ = FedexQuoteMandates();
    fedexSOQuoteMandates.__proto__.FullFillServiceMandates = function (constraints, constants) {
        /*
        Check for all the mandates and see if we can service the request. 
        */
        // For now it is only the weight
        if (constants.minimumChargeableWeight > constraints.weight) {
            constraints.weight = constants.minimumChargeableWeight;
        }
        constraints.weightSlab = constants.weightSlabs;
        return true;
    }
    console.log('GURU FedexSOQuoteMandates')
    return fedexSOQuoteMandates;
}

module.exports = FedexSOQuoteMandates;