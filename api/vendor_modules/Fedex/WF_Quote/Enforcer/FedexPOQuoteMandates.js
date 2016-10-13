var FedexQuoteMandates = require('./FedexQuoteMandates');

var FedexPOQuoteMandates = function () {
    var fedexPOQuoteMandates = {};
    fedexPOQuoteMandates.__proto__ = FedexQuoteMandates();
    fedexPOQuoteMandates.__proto__.FullFillServiceMandates = function (constraints, constants) {

        /*
        *
        * Determine the weight slab for incoming weight. this weight slab is used to calculate the base price per unit
        */
        //////////////////////////////// Determine WeightSlab/////////////////////////////////////////////
        slabCount = constants.weightSlabs.length;
        console.log('Slab count ' + slabCount);
        var slab = 0;
        found = false;
        for (slow = 0; slow < slabCount; slow++) {
            console.log('Weight ' + constraints.weight + 'Slab beg ' + constants.weightSlabs[slow][0] + 'Slab end ' + constants.weightSlabs[slow][1]);
            if (constraints.weight <= constants.weightSlabs[slow][0] ||
             (constraints.weight > constants.weightSlabs[slow][0] && constraints.weight <= constants.weightSlabs[slow][1])) {
                found = true;
                slab = slow;
                console.log('Found ' + found + ' slab value ' + slab);
                break;
            }
        }

        console.log('Found ' + found);
        if (found === false) {           slab = slabCount - 1;
        }

        constraints.weightSlab = slab;
        /////////////////////////////////////////////////////////////////// This Way weight slab can be calculated easily///////////////////
        return true;
    }
    console.log('GURU FedexPOQuoteMandates')
    return fedexPOQuoteMandates;
}

module.exports = FedexPOQuoteMandates;