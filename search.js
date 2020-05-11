var exports = module.exports={};
var DUMMY_RESULTS = {};

DUMMY_RESULTS.list1 = ["Osmows", "Chipotle"];
DUMMY_RESULTS.list2 = ["Burrito Boyz", "McDonalds", "Pizza Hut"];
DUMMY_RESULTS.list3 = ["Burger King"];


exports.Search = function(postalCode){
    
    if(postalCode === "AR51 1AA"){
        return DUMMY_RESULTS.list1;
    }else if(postalCode === "A1B 2C3"){
        return DUMMY_RESULTS.list2;
    }else if(postalCode === "Z9X 4B2"){
        return DUMMY_RESULTS.list3;
    }
    return [];
}