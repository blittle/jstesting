(function() {
    var page = require('webpage').create();
    var url = 'http://localhost:9876/capture';
    var captureAttempts = 0;
    var captured = false;
    var locked = false;

    var log = function(str) {
        var dt = new Date();
        console.log(dt.toString() + ': ' + str);
    };

    var pageLoaded = function(status) {
        log('Finished loading ' + url + ' with status: ' + status);

        var runnerFrame = page.evaluate(function() {
            return document.getElementById('runner');
        });

        if (!runnerFrame) {
            locked = false;
            setTimeout(capture, 1000);
        } else {
            captured = true;
        }
    };

    var capture = function() {
        if (captureAttempts === 5) {
            log('Failed to capture JSTD after ' + captureAttempts + ' attempts.');
            phantom.exit();
        }

        if (captured || locked) {
            return;
        }

        captureAttempts += 1;
        locked = true;

        log('Attempting (' + captureAttempts + ') to load: ' + url);
        page.open(url, pageLoaded);
    };

    capture();
}());