var commanUtils = require('..\\..\\Common\\Definitions')
var QuoteGenerator = require('..\\..\\Common\\QuoteGenerator')
var FedexBuilderFactory = require('./WF_Quote/Patterns/FedexQuotesBuilderFactory')
 
module.exports =function (vendor_api_modules,requestedAPI) {
   
    this.vendorName = "FEDEX";
    /*
    For now we are implementing only the Quotes module.
    in future when we add more modules  
    Appropriate handlers should be implemented and tied up in the api modules dictionary. 
    */ 
    if (requestedAPI == commanUtils.vendorSupportedAPI.Quotes) {
        vendor_api_modules[this.vendorName + '_' + commanUtils.vendorSupportedAPI.Quotes] = generateQuotes;
         
    }
    
};  
function generateQuotes(constraints, quotes_holder) { 
    /*
    Implement the rate calculation 
    */
    /*
    TODO IMPORTANT
    For each service type vendor supports, there will be a new quote
    Introduce a Module loader which loads the builder modules from the Quotes folder and push into an array
    Iterate through that array
    Create objects of varioud builders 
    Instantiate the Quote generator with those builders 
    Call Generate Quote and push that into the quotes_holder array
    */  
       
    var Gen = new QuoteGenerator();       
    var returnVal = commanUtils.ErrorModes.eSuccess;     
    var builderFactory = new FedexBuilderFactory();  
    console.log("Inside FedexQuotes" + commanUtils.FedexModesCount);  
    for (var i = 0; i < commanUtils.FedexModesCount; i++) {
        try{    
             console.log("QuoteGenerator GenerateQuote FEDEX ");
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
   return returnVal;;
    //quotes_holder.push("{\"Quotes\":\"Fedex Generated Quotes\"}");

}