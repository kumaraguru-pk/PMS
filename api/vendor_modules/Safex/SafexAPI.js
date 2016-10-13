var commanUtils = require('..\\..\\Common\\Definitions')
var QuoteGenerator = require('..\\..\\Common\\QuoteGenerator')
var SafexBuilderFactory = require('./WF_Quote/Patterns/SafexQuotesBuilderFactory')

module.exports = function (vendor_api_modules, requestedAPI) {
    this.vendorName = "SAFEX";     
    /*     
    For now we are implementing only the Quotes module.
    in future when we add more modules 
    Appropriate handlers should be implemented and tied up in the api modules dictionary. 
    */
    if (requestedAPI == commanUtils.vendorSupportedAPI.Quotes) {
         
        console.log(this.vendorName + '_' + commanUtils.vendorSupportedAPI.Quotes);
        vendor_api_modules[this.vendorName + '_' + commanUtils.vendorSupportedAPI.Quotes] = generateQuotes;
        console.log(vendor_api_modules);
    }
};

function generateQuotes( constraints,quotes_holder) { 

  /*
    TODO IMPORTANT
    For each service type vendor supports, there will be a new quote
    Introduce a Module loader which loads the builder modules from the Quotes folder and push into an array
    Iterate through that array
    Create objects of varioud builders
    Instantiate the Quote generator with those builders 
    Call Generate Quote and push that into the quotes_holder array
 */ 

/*
Implement the rate calculation
How to calculate rate for Safex
 
Based on the from pin determine the state code.
Based on the to pin determine the state code.    
*/    

// This safexSurfaceBuilder dependency should be moved out of the API. ther e should be a factory to construct the builder which will decide the 
//dependencies and pass it along while constructing. 
    var Gen = new QuoteGenerator();      
    var returnVal = commanUtils.ErrorModes.eSuccess;     
    var builderFactory = new SafexBuilderFactory();  
    console.log("Inside SafexQuotes" + commanUtils.SafexModesCount);  
    for (var i = 0; i < commanUtils.SafexModesCount; i++) {
        try{   
             console.log("QuoteGenerator GenerateQuote SAFEX ");
             Quotes = Gen.GenerateQuote(builderFactory.CreateQuotesBuilder(i,constraints));
        if ( Quotes.Failed !== true) { 
            quotes_holder.push(Quotes);   
            console.log(quotes_holder);
        }  
        else{
            returnVal = Quotes.errorCode;
        }
        }
        catch(err)
        {
            console.log(err);
        }
    }
   return returnVal; 
}