
// Model for the input data passed as part of the Get Quotes call.

var QuoteQueryInfo = function () {
    this.FromPin = "";
    this.ToPin = "";
    this.weight = 0;
    this.length = 0;
    this.height = 0;
    this.breadth = 0;
    this.shipmentGoodsvalue = 0;
    this.additionalServices = 0; /// TODO define the additional services requested as enum can COD, insurance option, saturday delivery etc
    this.shipmentGoodsType = 0; // TODO enum to say what kind of shipment is it ( cargo or document)
    this.packageCount = 1;
}
if (typeof(module) !==  'undefined' )
{  
    module.exports = QuoteQueryInfo;
}
