
var FedexQuoteConstants = function () {
    console.log("FedexQuoteConstants");
    /*
    *
    * Define all the constants here for fedex 
    */
    var tax = .1236;
    var FuelSurchCharge = .1450; //
    return {
        tax: tax,
        FuelSurchCharge:FuelSurchCharge
    }
}

module.exports = FedexQuoteConstants;


