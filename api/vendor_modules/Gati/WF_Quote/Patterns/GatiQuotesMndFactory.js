//Factory Modules to construct the Mandates across the service types.
var GatiSurfaceSvcMnd  = require('..//Enforcer//GatiSurfaceServiceMandates')
var GatiAirMnd = require('..//Enforcer//GatiAirServiceMandates')
var commonUtils =  require('..//..//..//..//Common//Definitions')

var GatiMandatesFactory = function () {
    this.RetrieveGatiMandates = function (type) {
        var mandates = null;
        switch (commonUtils.GatiModes[type]) {
            case 'Surface':
                mandates = new GatiSurfaceSvcMnd();
                break;
            case 'Air':
             console.log('GURU AIR  mandates');
                mandates = new GatiAirMnd();
                // Not supported yet
                break;
        }
        return mandates;
    }
}


module.exports = GatiMandatesFactory;