
var GatiServiceConstants = function () {
    console.log("GatiServiceConstants");
    var WayBillCharge = 225;
    var ValueSurcharge = [
        // Starting price, Ending Price,surcharge,minimum
        [1, 10000, .06, 200],
        [10001, 25000, .15, 300],
        [25000, null, .2, 400],
    ];
    /*
     * Package Handling charges	
Weight	Charge
32 -70	20
71 -200	200
201 -700	2000

     * */
    var HandlingCharges = [
        /*Starting weight,end weight, charges*/
        [0,   32,     0],
        [32,  70,    20],
        [71, 200,   200],
        [201,700,  2000],



    ];
    var DOD = 350;
    var DAC = 350;
    var HubDelivery = 350;
    var FrieghtOnDelivery = 200;
    var DieselSurchCharge = .20; //
    var volumetricConstant = 1728;
    var COD = 200;
    var EssDistanceProgressIon = [ 
        [0, 25],
        [26, 100],
        [101, 150],
        [151, 200],
        [201, 300],
        [301, null]
    ];
    //0-50	51-100	101-250	251-500	501-1000	1001-2000	> 2000
    var EssWeightProgressIon = [ 
        [0, 50],
        [51, 100],
        [101, 250],
        [251, 500],
        [501, 1000],
        [1001, 2000],
        [2000, null]
    ];
    
    /*50	51-100	101-250	251-500	501-1000	1001-2000	> 2000*/
    var GatiESSMapping = [
            /*0-25    */[0, 0, 0, 0, 0, 0, 8000] ,
            /*26-100  */[650, 750, 1000, 1150, 1500, 1750, 8000] ,
            /*101-150 */[1000, 1250, 1500, 1750, 2000, 2500, 8000] ,
            /*151-200 */[1250, 1500, 1750, 2000, 2250, 3000, 8000] ,
            /*201-300 */[1500, 1750, 2000, 2500, 3000, 3600, 8000] ,
            /*>300    */[8000, 8000, 8000, 8000, 8000, 8000, 8000]
    ];
    var tax = .1236;
    var GetValueSurcharge = function(amount)
    {
        var surcharge = 0;
        for (i = 0; i < ValueSurcharge.length; i++) {
            if (amount >= ValueSurcharge[i][0] &&
            (amount <= ValueSurcharge[i][1] 
             || ValueSurcharge[i][1] === null)) {
                surcharge = amount * ValueSurcharge[i][2];
                if (surcharge < ValueSurcharge[i][3])
                    surcharge=ValueSurcharge[i][3];
                break;
            }
        }

        return surcharge;
    }
    
    var GetHandlingCharges = function(weight)
    {
        var charge = 0;
        for (i = 0; i < HandlingCharges.length; i++) {
            if (weight >= HandlingCharges[i][0] &&
            (weight <= HandlingCharges[i][1] 
             || HandlingCharges[i][1] === null)) {
                charge = HandlingCharges[i][2];
                break;
            }
        }

        return charge;
    }

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
        ,GatiESSMapping: GatiESSMapping
        ,GetValueSurcharge: GetValueSurcharge
        ,GetHandlingCharges: GetHandlingCharges
    }
}

module.exports = GatiServiceConstants;


