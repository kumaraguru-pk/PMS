
var ModuleLoader = require('./ModuleLoader');
var commanFiles = require('./Common/Definitions');

var VendorManager = function()
{
    // Define all the API Buckets
    // For now we support only Quotes
    // In future we might support much more API's , hence we might refer multiple API buckets.
    // for example, we may introduce confirm order API 
    // when the quotes are generated, it will include the vendor Tag as well
    // when user books an order, then order will include the 
    this.vendor_quotes_api_list = {};
}
VendorManager.prototype.BuildQuotesModule = function () {
    var quotesAPILoader = new ModuleLoader(commanFiles.vendorSupportedAPI.Quotes,'API'); 
    quotesAPILoader.LoadModule('./api/vendor_modules',this.vendor_quotes_api_list,quotesAPILoader );
}

function GetErrorMessage(status)
{
    var msg = "";
    switch(status)
    {
        case commanFiles.ErrorModes.eSFXMandateFailed: 
            msg = "Mandates not met, Safex couldnt fulfill this Query!! Please check the shipping weight for minimum requirement";
            break;
        case commanFiles.ErrorModes.eSFXRouteNotSupported:
        msg = " Sorry Looks like Safex doesnt support this route.We are still working on our data base please try after sometime!!"
            break;

    }
    return msg;
    
}
VendorManager.prototype.RetrieveQuotes = function (constraints) {

    var keys = Object.keys(this.vendor_quotes_api_list);
    var QuotesArr = new Array();

    for (var key in keys) {
        var Status = this.vendor_quotes_api_list[keys[key]](constraints, QuotesArr);
        if (Status != commanFiles.ErrorModes.eSuccess) {
            //TODO REMOVE THIS AS IT IS DEMO PURPOSE. EVEN IN CASE OF ERRORS the function should continue querying others in the list. 
          //  var Quotes = new Object();
          //  Quotes.Success = false;
          //  Quotes.Message = GetErrorMessage(Status);
           // QuotesArr.push(Quotes);
            //return QuotesArr;
        }
    }
    return QuotesArr;
}


module.exports = VendorManager;