
var SupportLctnBuilder = require('./VendorSupportedLocationsHandler/SupportedLocationsBuilder')
var SupportedLocations = function () {
    return SupportLctnBuilder.RetrieveSupportedLocationsASJson();
};
 
module.exports.SupportedLocations = SupportedLocations;
