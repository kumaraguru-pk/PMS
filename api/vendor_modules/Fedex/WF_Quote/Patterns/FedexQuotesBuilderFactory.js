var SOBuilder = require('./FedexSOQuoteBuilder')
var POBuilder = require('./FedexPOQuoteBuilder')
var commonUtils =  require('..//..//..//..//Common//Definitions')
var FedexConstFactory = require('./FedexQuotesConstantsFactory')
var FedexMandatesFactory = require('./FedexQuotesMandatesFactory')

var FedexBuilderFactory = function () {
    this.CreateQuotesBuilder = function (type, constraints) {
        console.log("GURU CreateQuotesBuilder");
        var builder = null;
        var constantsFactory = new FedexConstFactory();
        var mandatesFactory = new FedexMandatesFactory();
        var fedexConstants = constantsFactory.RetrieveFedexConstants(type);
        var fedexMandates = mandatesFactory.RetrieveFedexMandates(type);
        switch (commonUtils.FedexModes[type]) {
            case 'Priority_Overnight':
                builder = new POBuilder(constraints, fedexMandates, fedexConstants);
                break;
            case 'Standard_Overnight':
                // Not supported yet
                // console.log("GURU AIR MANDATES" + safexMandates);
                // console.log("GURU AIR CONSTANTS" + safexConstants);
                builder = new SOBuilder(constraints, fedexMandates, fedexConstants);
                break;
        }
         console.log("GURU FedexBuilderFactory builder" + builder);
        return builder;
    }
}

module.exports = FedexBuilderFactory;