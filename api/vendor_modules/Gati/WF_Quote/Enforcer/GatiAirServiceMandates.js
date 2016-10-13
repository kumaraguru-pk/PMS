var GatiServiceMandates = require('./GatiServiceMandates');

var GatiAirMandates = function () {
    var gatiAirMandates = {};
    gatiAirMandates.__proto__ = GatiServiceMandates();
   
    console.log('GURU gatiAirMandates')

    return gatiAirMandates;
}

module.exports = GatiAirMandates;