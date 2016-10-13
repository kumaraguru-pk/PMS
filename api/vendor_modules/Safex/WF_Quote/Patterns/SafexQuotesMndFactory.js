//Factory Modules to construct the Mandates across the service types.
var SafexSurfaceSvcMnd  = require('..//Enforcer//SafexSurfaceServiceMandates')
var SafexAirMnd = require('..//Enforcer//SafexAirServiceMandates')
var commonUtils =  require('..//..//..//..//Common//Definitions')

var SafexMandatesFactory = function () {
    this.RetrieveSafexMandates = function (type) {
        var mandates = null;
        switch (commonUtils.SafexModes[type]) {
            case 'Surface':
                mandates = new SafexSurfaceSvcMnd();
                break;
            case 'Air':
             console.log('GURU AIR  mandates');
                mandates = new SafexAirMnd();
                // Not supported yet
                break;
        }
        return mandates;
    }
}


module.exports = SafexMandatesFactory;