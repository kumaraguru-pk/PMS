var commandUtils = require("..\\..\\..\\..\\Common\\Definitions");

/*
Any constants or limitations specific to a service will go here. 
For example certain service will enfore some weight limitations
For now we have this. 
*/

var GatiServiceMandates = function () {
    
    FullFillServiceMandates = function (constraints,constants)
    {
        ApplyDefaultConstraints(constraints, constants);
        return true;
    }
    
    ApplyDefaultConstraints = function (constraints, constants)
    {
        if (constants.minimumChargeableWeight > constraints.weight) {
            constraints.weight = constants.minimumChargeableWeight;
        }
    }
    
    IsServicable = function (fromLocation, toLocation)
    {
        /*
         * From location should support pickup
         * To location should support delivery
         * */
        var returnVal = true; 
        if  (commandUtils.ServiceTypes.eDeliveryOnly.is(fromLocation.ServiceOpt) ||
             commandUtils.ServiceTypes.ePickupOnly.is(toLocation.ServiceOpt)) {
            returnVal = false;
        }
        return returnVal;

    }



     GetESSMandateCharges = function (constraints, constants) {
        var distanceProgress = null;
        var weightProgress = null;
        var essCharges = 0;
        for (i = 0; i < constants.EssDistanceProgressIon.length; i++) {
            if (constraints.ToLocRecord.Distance_From_direct >= constants.EssDistanceProgressIon[i][0] &&
            (constraints.ToLocRecord.Distance_From_direct <= constants.EssDistanceProgressIon[i][1] || constants.EssDistanceProgressIon[i][1] === null)) {
                distanceProgress = i;
                break;
            }
        }
        for (i = 0; i < constants.EssWeightProgressIon.length; i++) {
            if (constraints.ToLocRecord.Distance_From_direct >= constants.EssWeightProgressIon[i][0] &&
            (constraints.ToLocRecord.Distance_From_direct <= constants.EssWeightProgressIon[i][1]
             || constants.EssWeightProgressIon[i][1] === null)) {
                weightProgress = i;
                break;
            }
        }


        if (distanceProgress !== null && weightProgress !== null) {
            essCharges = constants.GatiESSMapping[distanceProgress][weightProgress];
        }
        return essCharges;
    }
   

      return {
          FullFillServiceMandates:FullFillServiceMandates
        ,GetESSMandateCharges: GetESSMandateCharges
          ,IsServicable: IsServicable
    }
};

module.exports = GatiServiceMandates;