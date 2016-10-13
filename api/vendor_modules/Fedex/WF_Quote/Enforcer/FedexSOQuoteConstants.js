var FedexQuoteConstants = require('./FedexQuoteConstants');

var FedexSOQuoteConstants = function () {
     console.log("FedexSOQuoteConstants");
    var fedexSOQuoteConstants = {}
    fedexSOQuoteConstants.__proto__ = FedexQuoteConstants();
    fedexSOQuoteConstants.__proto__.weightSlabs = 3; // This value is hardcoded we need to change it once the actual database is created instead of JSON.
    fedexSOQuoteConstants.__proto__.weightunit = 1; // Price is incremented for every  KG
    fedexSOQuoteConstants.__proto__.minimumChargeableWeight = 5; // Minimum 5 KG's is required. 
    return fedexSOQuoteConstants;
}



module.exports = FedexSOQuoteConstants;