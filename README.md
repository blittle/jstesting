jstesting
=========
Browser-based development can sometimes be a challenge when trying utilize code sharing (http://jamisondance.com/2012/6/21/browser-code-sharing-is-terribad/).  
Add in module loading, unit testing, and automation...and things get hairy. Until the community comes to a solution, this repo
provides a boilerplate for getting up and running with AMD and unit test automation. 

Most of what is listed here is learned through painful experience at my day job (http://simplifile.com). If you know of better ways to solve these problems, please
let me know!


Javascript unit testing with:
  * [Jasmine](http://pivotal.github.com/jasmine/) - Jasmine is a behavior-driven development framework for testing JavaScript code.
  * [RequireJS/AMD](http://requirejs.org/) - RequireJS is an AMD (asynchronus module definition) javascript file and module loader.
  * [jsTestDriver](https://code.google.com/p/js-test-driver/) - Cross-browser test automation with code coverage.
  * [PhantomJS](http://phantomjs.org/) - Headless webkit

## Requirements
The shell scripts assume that the following are installed with binarys available at the local path
  * [JRE 1.6](http://www.oracle.com/technetwork/java/javase/downloads/index.html) - Used to startup the jsTestDriver jars
  * [PhantomJS](http://phantomjs.org/) - PhantomJS is used for a completely headless execution of the tests

## Executing the test
This example only has one test `spec/fooSpec.js` which tests the module `src/foo.js`

The tests can be started multiple ways:
 * Open `specRunner.html` - If using chrome make sure that the flag [--allow-file-access-from-files](https://src.chromium.org/viewvc/chrome?view=rev&revision=39287) is set when booting chrome.
                          This is the easiest way to run the test.

 * Start the jsTestDriver server and connect a set of browsers to it which will automatically run the tests. Start the server by executing at the root of the repo the following:
~~~ bash
sh serverInit.sh
~~~
In as many browsers as you want, open the url `http://localhost:9876/capture`. Then at another command prompt, execute:
~~~ bash
sh runJasmineTests.sh
~~~
This will send the test and its dependencies to each connected browser and execute them. You can easily set up various machines running different versions of browsers
and have them all connected to the test server. This can provide some level of automation in executing the tests in various browser environments.
 
 * Run the tests entirely headless with PhantomJS connecting to jsTestDriver. Upon completion the jsTestDriver server and phantomjs process are automatically killed:
~~~ bash
sh startTestAutomation.sh
~~~

## Viewing Code Coverage
Of the three ways for running the tests above, the latter 2 will provide test output results in `testOutputDir`. The output is in standard junit xml. The code coverage is located in `testOutputDir/jsTestDriver.conf-coverage.dat` and is
in gcc's lcov format. Use [genhtml](http://linux.die.net/man/1/genhtml) or something similar to generate html output (or parse the results yourself).