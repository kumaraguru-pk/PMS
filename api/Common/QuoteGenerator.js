
var commandUtils = require('./Definitions');

var QuoteGenerator = function()
{
    
}

QuoteGenerator.prototype.GenerateQuote = function (QuoteBuilder) {
    var Quotes;
    if (QuoteBuilder !== null)
        var status = QuoteBuilder.PrepareForPriceCalculation();
    if (status == commandUtils.ErrorModes.eSuccess) {
        Quotes = QuoteBuilder.GetQuote(
           QuoteBuilder.AddInformation(
           QuoteBuilder.AddTax(
           QuoteBuilder.AddAdditionalChargesIfAny(
           QuoteBuilder.CalculateBasePrice()))));
    }
    else {
        Quotes = new Object();
        Quotes.Failed = true;
        Quotes.errorCode = status;
    }

    return Quotes;
}

module.exports = QuoteGenerator;