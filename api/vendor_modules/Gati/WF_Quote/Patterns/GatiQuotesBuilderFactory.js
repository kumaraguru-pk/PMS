var surfaceBuilder = require('./GatiSurfaceQuoteBuilder')
var airBuilder = require('./GatiAirQuoteBuilder')
var commonUtils =  require('..//..//..//..//Common//Definitions')
var GatiConstFactory = require('./GatiQuotesSvcCnstFactory')
var GatiMandatesFactory = require('./GatiQuotesMndFactory')

var GatiBuilderFactory = function () {
    this.CreateQuotesBuilder = function (type, constraints) {
        var builder = null;
        var constantsFactory = new GatiConstFactory();
        var mandatesFactory = new GatiMandatesFactory();
        var gatiConstants = constantsFactory.RetrieveGatiConstants(type);
        var gatiMandates = mandatesFactory.RetrieveGatiMandates(type);
        switch (commonUtils.GatiModes[type]) {
            case 'Surface':
                builder = new surfaceBuilder(constraints, gatiMandates, gatiConstants);
                break;
            case 'Air':
                // Not supported yet
               // console.log("GURU AIR MANDATES" + safexMandates);
               // console.log("GURU AIR CONSTANTS" + safexConstants);
                builder = new airBuilder(constraints, gatiMandates, gatiConstants);
                break;
        }

        return builder;
    }
}

module.exports = GatiBuilderFactory;