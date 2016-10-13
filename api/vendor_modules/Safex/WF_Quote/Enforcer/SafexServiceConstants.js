
var SafexServiceConstants = function () {
    console.log("SafexServiceConstants");
    var WayBillCharge = 250;
    var ValueSurcharge = .005; // 5 %
    var DOD = 350;
    var DAC = 350;
    var HubDelivery = 350;
    var FrieghtOnDelivery = 100; //100 per 100 KG maximum is 500. 
    var DieselSurchCharge = .30; //
    var volumetricConstant = 1728;
    var EssDistanceProgressIon = [ 
    [0,25],
    [26,100],
    [101,150],
    [151,200],
    [201,300],
    [301,null]
    ];
    //0-50	51-100	101-250	251-500	501-1000	1001-2000	> 2000
    var EssWeightProgressIon = [ 
    [0,50],
    [51,100],
    [101,250],
    [251,500],
    [501,1000],
    [1001,2000],
    [2000,null]
    ];

    var SafexESSMapping = [
            /*0-25    */[0   ,     0,      0,      0,      0,      0,   1500] ,
            /*26-100  */[1500,	1500,	1500,	1500,	1500,	1500,	1500] ,
            /*101-150 */[1500,	1500,	1500,	1500,	1500,	1500,	1500] ,
            /*151-200 */[1500,	1500,	1500,	1500,	1500,	1500,	1500] ,
            /*201-300 */[1500,	1500,	1500,	1500,	1500,	1500,	1500] ,
            /*>300    */[1500,	1500,	1500,	1500,	1500,	1500,	1500] 
        ] ;
    var tax = .1236;
    return {
        WayBillCharge: WayBillCharge
        , ValueSurcharge: ValueSurcharge
        , DOD: DOD
        , DAC: DAC
        , HubDelivery: HubDelivery
        , FrieghtOnDelivery: FrieghtOnDelivery
        , DieselSurchCharge: DieselSurchCharge
        , volumetricConstant: volumetricConstant
        , tax: tax
        ,EssDistanceProgressIon: EssDistanceProgressIon
        ,EssWeightProgressIon: EssWeightProgressIon
        ,SafexESSMapping: SafexESSMapping
    }
}

module.exports = SafexServiceConstants;


