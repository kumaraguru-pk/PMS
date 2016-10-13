//Factory Modules to construct the Service constants across the service types.
var SafexSurfaceSvcCnst = require('..//Enforcer//SafexSurfaceServiceConstants')
var SafexAirSvcCnst = require('..//Enforcer//SafexAirServiceConstants')
var commonUtils =  require('..//..//..//..//Common//Definitions')


var SafexConstantFactory = function () {
    this.RetrieveSafexConstants = function (type) {
        var constants = null;
        switch (commonUtils.SafexModes[type]) {
            case 'Surface':
                constants = new SafexSurfaceSvcCnst();
                break;
            case 'Air':
                console.log('GURU AIR Constants SVC');
                constants = new SafexAirSvcCnst();
                // Not supported yet
                break;
        }
        return constants;
    }
}


module.exports = SafexConstantFactory;