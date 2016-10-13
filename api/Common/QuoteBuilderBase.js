var QuoteLayout = require('..//..//models//Quote')

/*
* 
* There may be multiple service types available for the same constraints
* So number of quotes will be equal to number of service types available. 
* Single Builder is associated with a single vendor and capable of handling only one service type. 
* this design should be enhanced in the future so that there may be multiple builders for multiple service types
* in future we can introduce a builders factory which instantiate all the builder modules and push it into a array which will be availabel to 
* Get Quotes API module. 
* 
* Also in future if we need to introduce more functionalities we may extend the quote builder base and s
* tart adding some more functionalities to it
*/
var QuoteBuilderBase = function (Constraints, SrvMandates, SrvConstants) {
    var Quote = new QuoteLayout();
    var ServiceConstants = null;
    var ServiceMandates = null;
    var FromLocRecord = null;
    var ToLocRecord = null;
    var VendorName = null;

    function CanBuild() {

    }
    function PrepareForPriceCalculation() {
    }
    function CalculateBasePrice(input) {
    }
    function AddTax(input) {
    }
    function AddAdditionalChargesIfAny(input) {
    }
    function AddInformation(input) {
    }
    function GetQuote() {
        return Quote;
    }
    return {
        Quote: Quote
        , ServiceConstants: ServiceConstants
        , ServiceMandates: ServiceMandates
        , PrepareForPriceCalculation: PrepareForPriceCalculation
        , CalculateBasePrice: CalculateBasePrice
        , AddTax: AddTax
        , AddAdditionalChargesIfAny: AddAdditionalChargesIfAny
        , GetQuote: GetQuote
        , FromLocRecord:FromLocRecord
        , ToLocRecord: ToLocRecord
        , VendorName: VendorName
    }
}

module.exports = QuoteBuilderBase;