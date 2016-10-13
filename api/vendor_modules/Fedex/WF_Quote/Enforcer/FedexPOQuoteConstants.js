var FedexQuoteConstants = require('./FedexQuoteConstants');

var FedexPOQuoteConstants = function () {
    console.log("FedexPOQuoteConstants");
    var fedexPOQuoteConstants = {}
    fedexPOQuoteConstants.__proto__ = FedexQuoteConstants();
    fedexPOQuoteConstants.__proto__.weightSlabs = [[0.5,10.5],[10.5,71] ,[71,-1]];
    fedexPOQuoteConstants.__proto__.weightunit = .5; // Price is incremented for every half KG
    fedexPOQuoteConstants.__proto__.minimumChargeableWeight = 0; // No Minimum weight. 
    return fedexPOQuoteConstants;
}


module.exports = FedexPOQuoteConstants;