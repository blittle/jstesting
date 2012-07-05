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