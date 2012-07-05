#!/bin/bash

ROOTDIR="."
JSTD_VERSION=1.3.4.b

COMMAND=$1

command -v phantomjs >/dev/null 2>&1 || { echo "Can't find phantomjs, please make sure it's on your PATH." >&2; exit 1; }

if [ ! -f "$ROOTDIR/jsTestDriver.jar" ]; then
    echo "Cannot find jsTestDriver.jar"
fi

if [ ! -f "$ROOTDIR/coverage.jar" ]; then
    echo "Cannot find coverage.jar"
fi

if [ ! -f "$ROOTDIR/jsTestDriver.conf" ]; then
    echo "Cannot find jsTestDriver.conf"
fi

if [[ $COMMAND == "start" ]]; then
    echo "Starting JSTD Server"

    nohup java -jar $ROOTDIR/jsTestDriver.jar --verbose --captureConsole --config jsTestDriver.conf --port 9876 > $ROOTDIR/testOutputDir/jstd.out 2> $ROOTDIR/testOutputDir/jstd.err < /dev/null &
    echo $! > $ROOTDIR/testOutputDir/jstd.pid

    echo "Starting PhantomJS"

    nohup phantomjs phantomjs-jstd.js > $ROOTDIR/testOutputDir/phantomjs.out 2> $ROOTDIR/testOutputDir/phantomjs.err < /dev/null &
    echo $! > $ROOTDIR/testOutputDir/phantomjs.pid
fi

if [[ $COMMAND == "stop" ]]; then
    echo "Killing JSTD Server"

    PID=`cat $ROOTDIR/testOutputDir/jstd.pid`
    kill $PID

    rm -f $ROOTDIR/testOutputDir/jstd.out $ROOTDIR/testOutputDir/jstd.err $ROOTDIR/testOutputDir/jstd.pid

    echo "Killing PhantomJS"

    PID=`cat $ROOTDIR/testOutputDir/phantomjs.pid`
    kill $PID

    rm -f $ROOTDIR/testOutputDir/phantomjs.out $ROOTDIR/testOutputDir/phantomjs.err $ROOTDIR/testOutputDir/phantomjs.pid
fi

