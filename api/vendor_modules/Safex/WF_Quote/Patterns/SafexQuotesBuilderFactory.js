var surfaceBuilder = require('./SafexSurfaceQuoteBuilder')
var airBuilder = require('./SafexAirQuoteBuilder')
var commonUtils =  require('..//..//..//..//Common//Definitions')
var SafexConstFactory = require('./SafexQuotesSvcCnstFactory')
var SafexMandatesFactory = require('./SafexQuotesMndFactory')

var SafexBuilderFactory = function () {
    this.CreateQuotesBuilder = function (type, constraints) {
        var builder = null;
        var constantsFactory = new SafexConstFactory();
        var mandatesFactory = new SafexMandatesFactory();
        var safexConstants = constantsFactory.RetrieveSafexConstants(type);
        var safexMandates = mandatesFactory.RetrieveSafexMandates(type);
        switch (commonUtils.SafexModes[type]) {
            case 'Surface':
                builder = new surfaceBuilder(constraints, safexMandates, safexConstants);
                break;
            case 'Air':
                // Not supported yet
               // console.log("GURU AIR MANDATES" + safexMandates);
               // console.log("GURU AIR CONSTANTS" + safexConstants);
                builder = new airBuilder(constraints, safexMandates, safexConstants);
                break;
        }

        return builder;
    }
}

module.exports = SafexBuilderFactory;