This project provides unit tests for different postal codes entered into a dummy version of the Just Eats search function. 

I used Jasmine for my tests. The test scripts are located in src/spec/SearchSpec.js and my placeholder version of the search function is in src/search.js. Both of these files have their own set of "dummy results" the provide an array of restaurants for each postal code/ test case. For each test the results from the search function are compared to the expected results (the corresponding dummy result). If the results match the test case is passed, if they don't then the test fails. With the data provided in dummy results, the 1st, 2nd and 4th tests should pass and the 3rd one should fail. 

In order to execute the tests, clone the repository, navigate to the project folder in a CLI and run the command: jasmine
