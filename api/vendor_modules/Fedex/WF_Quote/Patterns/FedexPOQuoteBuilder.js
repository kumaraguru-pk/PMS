var BuilderBase = require('..\\..\\..\\..\\Common\\QuoteBuilderBase');
var commandUtils = require("..\\..\\..\\..\\Common\\Definitions");
var DataManager = require('..\\..\\Database\\FedexQuoteDataManager');

var FedexPriority_OvernightQuoteBuilder = function (Constraints, SrvMandates, SrvConstants) {
    var fedexPOQuoteBuilder = {}
    fedexPOQuoteBuilder.__proto__ = BuilderBase();

    fedexPOQuoteBuilder.__proto__.ServiceConstants = SrvConstants;
    fedexPOQuoteBuilder.__proto__.ServiceMandates = SrvMandates
    fedexPOQuoteBuilder.__proto__.constraints = Constraints;
    fedexPOQuoteBuilder.__proto__.DataMgr = new DataManager();
    fedexPOQuoteBuilder.__proto__.basePrice = 0;
    fedexPOQuoteBuilder.__proto__.VendorName = "Fedex";
    fedexPOQuoteBuilder.__proto__.ServiceType = 'Priority_Overnight';
    fedexPOQuoteBuilder.__proto__.PrepareForPriceCalculation = function () {

        if (!SrvMandates.FullFillServiceMandates(Constraints, SrvConstants)) {
            console.log("Mandates not met, couldnt fulfill this service")
            return commandUtils.ErrorModes.eSFXMandateFailed;
        }

        fromLocationcode = this.DataMgr.getLocationCode(Constraints['FromPin']);

        toLocationcode = this.DataMgr.getLocationCode(Constraints['ToPin']);

        zonalInfo = this.DataMgr.getZonalInfo(fromLocationcode, toLocationcode);

        fedexPOQuoteBuilder.__proto__.basePrice = this.DataMgr.getPrice(zonalInfo, Constraints.weightSlab);
        console.log('weights slab ' + Constraints.weightSlab);
        return commandUtils.ErrorModes.eSuccess;
    }
    fedexPOQuoteBuilder.__proto__.CalculateBasePrice = function () {

        this.basePrice *= this.constraints.weight / this.ServiceConstants.weightunit;
        console.log("FedexBasicQuoteBuilder Base Price before tax " + this.basePrice);
    }
    fedexPOQuoteBuilder.__proto__.AddAdditionalChargesIfAny = function () {
        console.log("FedexBasicQuoteBuilder AddAdditionalChargesIfAny");
    }
    fedexPOQuoteBuilder.__proto__.AddTax = function () {
        // this.basePrice += this.basePrice * this.ServiceConstants.tax;
        //console.log("SafexBasicQuoteBuilder Price after tax " + this.basePrice);
        //console.log("FedexBasicQuoteBuilder AddTax");
    }
    fedexPOQuoteBuilder.__proto__.AddInformation = function () {
        this.Quote.ProviderName = this.VendorName;
        this.Quote.ProviderImagePath = "Search in web :)";
        this.Quote.Price = this.basePrice;
        this.Quote.ServiceType = this.ServiceType;
        this.Quote.Speed = 0;
        this.ExtraService = 1;
        console.log("FedexBasicQuoteBuilder AddInformation");
    }
    fedexPOQuoteBuilder.__proto__.GetQuote = function () {
        console.log("FedexBasicQuoteBuilder GetQuote");
        return this.Quote;
    }
    return fedexPOQuoteBuilder
}

module.exports = FedexPriority_OvernightQuoteBuilder;