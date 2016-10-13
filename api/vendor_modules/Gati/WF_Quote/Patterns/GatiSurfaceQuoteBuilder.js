var BuilderBase = require('..\\..\\..\\..\\Common\\QuoteBuilderBase');
var DataManager = require('..\\..\\Database\\GatiQuoteDataManager');
var commandUtils = require("..\\..\\..\\..\\Common\\Definitions");

/*
* TODO
Is there a different way to inject the following dependencies?
   DataManager
   WeightProcessor
   commandUtils
   SrvMandates
   SrvConstants

**/
var GatiSurfaceQuoteBuilder = function (Constraints, SrvMandates, SrvConstants) {
    var gatiSurfaceQuoteBuilder = {}
    gatiSurfaceQuoteBuilder.__proto__ = BuilderBase();
    gatiSurfaceQuoteBuilder.__proto__.ServiceConstants = SrvConstants;
    gatiSurfaceQuoteBuilder.__proto__.ServiceMandates = SrvMandates
    gatiSurfaceQuoteBuilder.__proto__.constraints = Constraints;
    gatiSurfaceQuoteBuilder.__proto__.DataMgr = new DataManager();
    gatiSurfaceQuoteBuilder.__proto__.basePrice = 0;
    gatiSurfaceQuoteBuilder.__proto__.VendorName = "Gati";
    gatiSurfaceQuoteBuilder.__proto__.ServiceType = 'Surface';
    gatiSurfaceQuoteBuilder.__proto__.PrepareForPriceCalculation = function () {
        /*
        STEP 1 Compute the Location Information of the incoming constraints. 
        STEP 2. return the price per unit. 
        This depends on multiple
        */
        gatiSurfaceQuoteBuilder.__proto__.constraints.FromLocRecord = gatiSurfaceQuoteBuilder.__proto__.FromLocRecord = this.DataMgr.GetRecord(Constraints['FromPin']);
        gatiSurfaceQuoteBuilder.__proto__.constraints.ToLocRecord = gatiSurfaceQuoteBuilder.__proto__.ToLocRecord = this.DataMgr.GetRecord(Constraints['ToPin']);

        if (gatiSurfaceQuoteBuilder.__proto__.constraints.FromLocRecord === null || gatiSurfaceQuoteBuilder.__proto__.constraints.ToLocRecord === null) {
            console.log("GATI Doesnt support this route");
            return commandUtils.ErrorModes.eSFXRouteNotSupported;
        }
        else if (SrvMandates.IsServicable(gatiSurfaceQuoteBuilder.__proto__.constraints.FromLocRecord,
                  gatiSurfaceQuoteBuilder.__proto__.constraints.ToLocRecord  )) {
            
            SrvMandates.FullFillServiceMandates(Constraints, SrvConstants);
            gatiSurfaceQuoteBuilder.__proto__.basePrice = gatiSurfaceQuoteBuilder.__proto__.DataMgr.getBasePrice(gatiSurfaceQuoteBuilder.__proto__.constraints.FromLocRecord.EDCCode, gatiSurfaceQuoteBuilder.__proto__.constraints.ToLocRecord.EDCCode);
            console.log("Price Per KG " + gatiSurfaceQuoteBuilder.__proto__.basePrice);
            return commandUtils.ErrorModes.eSuccess;
        }
        else {
            console.log("GATI Doesnt support this route");
            return commandUtils.ErrorModes.eSFXRouteNotSupported;
        }

    }
    gatiSurfaceQuoteBuilder.__proto__.CalculateBasePrice = function () {

        /*
        Let it also be part of the constants apply functionality as mentioned in the below 
        AddAdditionalChargesIfAny function. 
        */
        var volumetricWeight = ((this.constraints.length * this.constraints.height * this.constraints.breadth) / this.ServiceConstants.volumetricConstant) * this.ServiceConstants.volumetricdelta*this.constraints.packageCount;

        this.constraints.weight = (this.constraints.weight > volumetricWeight) ? this.constraints.weight : volumetricWeight;
        this.basePrice *= this.constraints.weight;
        console.log("Price excluding taxes and other charges is " + this.basePrice + " for the package with weight " +  this.constraints.weight );
    }

    gatiSurfaceQuoteBuilder.__proto__.AddAdditionalChargesIfAny = function () {

        /*
        Not sure is this the right way to do this. But for now it works. 
        need to think about a way to add more charges in a plug and play manner 
        Can it be a viewmaps on its own in the constraints with specific functions to do it?
        TODO:: Introduce a dictionary which contains the additional charges enum and initialise this 
        dictionary with the function pointers of appropriate service constants. 
        This way when addAddtionalCharges is called, it just iterated over the dictionary and calls the constants
        calculates the additional charge. 
        No need to change any of the code in future if some thing changes.  
        */
        console.log(this.ServiceConstants.DieselSurchCharge);
        console.log(this.basePrice);
        
        this.basePrice += this.ServiceConstants.GetHandlingCharges(this.constraints.weight);        
        console.log("GatiSurfaceQuoteBuilder Price after adding the handling charge " + this.basePrice);


        this.basePrice += this.basePrice * this.ServiceConstants.DieselSurchCharge;

        console.log("GatiSurfaceQuoteBuilder Price after adding the diesel surcharge " + this.basePrice);


        this.basePrice += this.ServiceConstants.WayBillCharge;
        console.log("GatiSurfaceQuoteBuilder Price after way bill charge " + this.basePrice);

        /*
        Calculate the value surcharge. 
        */
        this.basePrice += this.ServiceConstants.GetValueSurcharge(this.constraints.shipmentGoodsvalue);
        console.log("SafexBasicQuoteBuilder Price after value surcharge " + this.basePrice);

        /*
        Calculate the ESS Charges if any
        */
        if (  commandUtils.LocationTypes.eLtESS.is(this.constraints.ToLocRecord.LocationType) )
        {
        this.basePrice += this.ServiceMandates.GetESSMandateCharges(this.constraints, this.ServiceConstants);
        console.log("GatiSurfaceQuoteBuilder Price after ESS Charge " + this.basePrice);
        }

    }

    gatiSurfaceQuoteBuilder.__proto__.AddTax = function () {
        this.basePrice += this.basePrice * this.ServiceConstants.tax;
        console.log("GatiSurfaceQuoteBuilder Price after tax " + this.basePrice);
    }
    gatiSurfaceQuoteBuilder.__proto__.AddInformation = function () {
        this.Quote.ProviderName = this.VendorName;
        this.Quote.ProviderImagePath = "Search in web :)";
        this.Quote.Price = this.basePrice;
        this.Quote.ServiceType = this.ServiceType;
        this.Quote.Speed = 0;
        this.ExtraService = 1;
        console.log("GatiSurfaceQuoteBuilder AddInformation")
    }
    gatiSurfaceQuoteBuilder.__proto__.GetQuote = function () {
        console.log("GatiSurfaceQuoteBuilder GetQuote");
        return this.Quote;
    }
    return gatiSurfaceQuoteBuilder;
}

   
module.exports = GatiSurfaceQuoteBuilder;