//Factory Modules to construct the Service constants across the service types.
var GatiSurfaceSvcCnst = require('..//Enforcer//GatiSurfaceServiceConstants')
var GatiAirSvcCnst = require('..//Enforcer//GatiAirServiceConstants')
var commonUtils =  require('..//..//..//..//Common//Definitions')


var GatiConstantFactory = function () {
    this.RetrieveGatiConstants = function (type) {
        var constants = null;
        switch (commonUtils.GatiModes[type]) {
            case 'Surface':
                constants = new GatiSurfaceSvcCnst();
                break;
            case 'Air':
                console.log('GURU AIR Constants SVC');
                constants = new GatiAirSvcCnst();
                // Not supported yet
                break;
        }
        return constants;
    }
}


module.exports = GatiConstantFactory;