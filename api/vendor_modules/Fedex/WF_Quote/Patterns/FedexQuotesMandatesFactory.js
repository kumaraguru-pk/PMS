//Factory Modules to construct the Mandates across the service types.
var FedexPOMnd  = require('..//Enforcer//FedexPOQuoteMandates')
var FedexSOMnd = require('..//Enforcer//FedexSOQuoteMandates')
var commonUtils =  require('..//..//..//..//Common//Definitions')

var FedexMandatesFactory = function () {
    this.RetrieveFedexMandates = function (type) {
        var mandates = null;
        switch (commonUtils.FedexModes[type]) {
            case 'Priority_Overnight':
                mandates = new FedexPOMnd();
                break;
            case 'Standard_Overnight':
                mandates = new FedexSOMnd();
                // Not supported yet
                break;
        }
        return mandates;
    }
}

module.exports = FedexMandatesFactory;