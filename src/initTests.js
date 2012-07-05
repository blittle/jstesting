

require.config({
    baseUrl: "./",
    paths: {
        "text"   : "lib/require/require-text",
        "jquery" : "lib/jquery/jquery-1.7.2"        
    }
});


/**
 *
 * List the tests that will be run with SpecRunner.html
 *
 */

require(["jquery", "spec/fooSpec"],

function($) {

    "use strict";

    $(document).ready(function() {

        var jasmineEnv = jasmine.getEnv();
        jasmineEnv.updateInterval = 1000;

        var htmlReporter = new jasmine.HtmlReporter();
        jasmineEnv.addReporter(htmlReporter);

        jasmineEnv.specFilter = function(spec) {
            return htmlReporter.specFilter(spec);
        };

        jasmineEnv.execute();

    });

});
