var FedexLocationInfo = require('./FedexSupportedLocation');
var FedexPricingInfo = require('./FedexPricingInfo');
var FedexZonalInfo = require('./FedexZonalInfo');
var FedexMinWeightInfo = require('./FedexMinWeightInfo');

var FedexQuoteDataManager = function()
{
      
}

FedexQuoteDataManager.prototype.getLocationCode = function (pincode) {
    var elementFound;
    FedexLocationInfo.every(function (element, index, array) {
            if (element['Pincode'] === pincode) {
                elementFound = element;
                return false;
            }
        return true;
    });

    if (elementFound !== undefined) {
        return parseInt(elementFound.LocationCode);
    }
    else {
        return -1;
    }

}

FedexQuoteDataManager.prototype.getZonalInfo = function (LocationFrom, LocationTo) {
    return FedexZonalInfo[LocationFrom][LocationTo];
}

FedexQuoteDataManager.prototype.getPrice = function (zonalInfo,weightslab) {

    /*
    FedexPricing info table is used to calculate the base price info
    * Currently we support priority overnight and standard overnight.
    */
    console.log('Weightslab is ' + weightslab + 'zonal Info is ' + zonalInfo + 'get Price GURU ' + FedexPricingInfo[weightslab][zonalInfo])
    return FedexPricingInfo[weightslab][zonalInfo];
}


module.exports = FedexQuoteDataManager;