var FedexPOConstants  = require('..//Enforcer//FedexPOQuoteConstants')
var FedexSOConstants = require('..//Enforcer//FedexSOQuoteConstants')
var commonUtils =  require('..//..//..//..//Common//Definitions')


var FedexConstantFactory = function () {
    this.RetrieveFedexConstants = function (type) {
        var constants = null;
        switch (commonUtils.FedexModes[type]) {
            case 'Priority_Overnight':
                constants = new FedexPOConstants();
                break;
            case 'Standard_Overnight':
                constants = new FedexSOConstants();
                // Not supported yet
                break;
        }
        return constants;
    }
}


module.exports = FedexConstantFactory;