rm -r testOutputDir
mkdir testOutputDir
bash -ex phantomServer.sh start
sleep 10
bash -ex runJasmineTests.sh
bash -ex phantomServer.sh stop