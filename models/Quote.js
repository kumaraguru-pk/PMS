
var Quote = function () {
    this.ProviderName = ""
    this.ProviderImagePath = ""
    this.Price = 0,
  this.ServiceType = 0,
  this.Speed = 0,
  this.ExtraService = 0,
  this.Success = true;
    this.Message = "";
}
if (typeof(module) !==  'undefined' )
{  
    module.exports = Quote;
}

 