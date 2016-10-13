
var GatiLocationInfo = require('./GATISupportedLocation.json');
var GatiPricingInfo = require('./GatiPricingInfo.json');
var _ = require('underscore')


var GatiQuoteDataManager = function()
{
      
}

GatiQuoteDataManager.prototype.GetRecord = function (pincode) {

    var elementFound = null;
    GatiLocationInfo.every(function (element, index, array) {
        if (element.Pincode === pincode) {
            elementFound = element;
            return false;
        }

        return true;
    });
    return elementFound;
}

GatiQuoteDataManager.prototype.getBasePrice = function (From, To) {
    return GatiPricingInfo[From][To];
}


module.exports = GatiQuoteDataManager;