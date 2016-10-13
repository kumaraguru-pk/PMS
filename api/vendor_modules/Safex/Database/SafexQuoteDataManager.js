
var SafexLocationInfo = require('./SafexSupportedLocationNew.json');
var SafexPricingInfo = require('./SafexPricingInfo.json');
var _ = require('underscore')


var SafexQuoteDataManager = function()
{
      
}

SafexQuoteDataManager.prototype.GetESSCharges = function (distance,weight) {

    return SafexESSMapping[distance][weight];
}
SafexQuoteDataManager.prototype.GetRecord = function (pincode) {

    var elementFound = null;
    SafexLocationInfo.every(function (element, index, array) {
        if (element.Pincode === pincode) {
            elementFound = element;
            return false;
        }

        return true;
    });
    return elementFound;
}

SafexQuoteDataManager.prototype.getStateCode = function (pincode) {
    var elementFound;
    SafexLocationInfo.every(function (element, index, array) {
            if (element['PinCode'] === pincode) {
                elementFound = element;
                return false;
            }
        
        return true;
    });

    if (elementFound !== undefined) {
        return parseInt(elementFound.StateCode);
    }
    else {
        return -1;
    }

}

SafexQuoteDataManager.prototype.getBasePrice = function (pincodeFrom, pincodeTo) {
    return SafexPricingInfo[pincodeFrom][pincodeTo];
}


module.exports = SafexQuoteDataManager;