
var Search = require("../Search.js");
var DUMMY_RESULTS = {};

DUMMY_RESULTS.list1 = ["Osmows", "Chipotle"];
DUMMY_RESULTS.list2 = ["Burrito Boyz", "McDonalds", "Pizza Hut"];
DUMMY_RESULTS.list3 = ["Wendy's"];
DUMMY_RESULTS.list4 = [];

  //the test
  describe('Test restaurant search', () => {
    it('Given I want food in "AR51 1AA" ', () => {
        //arrange
        let postalCode = "AR51 1AA";

        //act
        const result = Search.Search(postalCode);

        //assert
        expect(result).toEqual(DUMMY_RESULTS.list1);

        });

    it('Given I want food in "A1B 2C3" ', () => {
        //arrange
        let postalCode = "A1B 2C3";

        //act
        const result = Search.Search(postalCode);

        //assert
        expect(result).toEqual(DUMMY_RESULTS.list2);

        });        
    it('Given I want food in "Z9X 4B2" ', () => {
        //arrange
        let postalCode = "Z9X 4B2";

        //act
        const result = Search.Search(postalCode);

        //assert
        expect(result).toEqual(DUMMY_RESULTS.list3);

        }); 
    it('Given I want food in "ABCD" ', () => {
        //arrange
        let postalCode = "ABCD";

        //act
        const result = Search.Search(postalCode);

        //assert
        expect(result).toEqual(DUMMY_RESULTS.list4);

        });
    });