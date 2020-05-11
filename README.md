# Just Eat Unit Tests

This package provides a set of unit tests for the Just Eat search function. 

## Installation

1. Create a folder in your local workspace where you would like the project to live.
2. Depending on your operating system open a [command prompt (windows)](https://www.online-tech-tips.com/computer-tips/how-to-use-dos-command-prompt/) or [terminal (mac)](https://macpaw.com/how-to/use-terminal-on-mac) and navigate to the folder you just created.
3. Once in the folder you created enter the following command (if this fails you must install [git](https://www.linode.com/docs/development/version-control/how-to-install-git-on-linux-mac-and-windows/) on your machine): 
```
git clone https://github.com/harmanb/JustEatsTests.git
``` 
4. Once this is complete enter the command:
```
cd JustEatsTests
```
5. Now you should be able to run the following command to run the tests:
```
jasmine
```

## Test Cases

There are 4 tests in this package:
1. Test one checks whether the restaurants for the postal code AR51 1AA match the expected results (this case will pass)
2. Test two checks whether the restaurants for the postal code A1B 2C3 match the expected results (this case will pass)
3. Test three checks whether the restaurants for the postal code Z9X 4B2 match the expected results (this case will not pass)
4. Test four checks whether the restaurants for the postal code ABCD match the expected results (this case will pass)

## Additional Notes

Case 4 uses an invalid postal code to test whether the results of such a query is an empty list.

I used Jasmine for my tests. The test scripts are located in src/spec/SearchSpec.js and my placeholder version of the search function is in src/search.js. Both of these files have their own set of "dummy results" the provide an array of restaurants for each postal code/ test case. For each test the results from the search function are compared to the expected results (the corresponding dummy result). If the results match the test case is passed, if they don't then the test fails. With the data provided in dummy results, the 1st, 2nd and 4th tests should pass and the 3rd one should fail. 

