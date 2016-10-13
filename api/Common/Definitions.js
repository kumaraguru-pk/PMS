
var enumm = require('enum');
exports.vendorSupportedAPI = new enumm(['Quotes']);

//// SAFEX related Constants
exports.SafexModes = ['Surface','Air'];
exports.SafexModesCount = 2;
///////////////////////////////////////////////////////

//// FEDEX related Constants
exports.FedexModes = ['Priority_Overnight','Standard_Overnight']; //Priority_Overnight, Standard_Overnight
exports.FedexModesCount = 2;
///////////////////////////////////////////////////

//// FEDEX related Constants
exports.GatiModes = ['Surface','Air']; //Priority_Overnight, Standard_Overnight
exports.GatiModesCount = 2;
///////////////////////////////////////////////////



exports.ErrorModes = new enumm({
eSFXMandateFailed:0,
eSFXRouteNotSupported:1,
eNone:2,
eSuccess:3
});

exports.LocationTypes = new enumm({
    eLtDirect: 0,
    eLtESS: 1
});

exports.ServiceTypes = new enumm({
    ePickupOnly: 0,
    eDeliveryOnly: 1,
    ePickNDeliver: 2
});
