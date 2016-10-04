#!/usr/bin/env bash

# start server for this test run
(node dist/server/index.js &) 

# Wait for port 3000
(while ! nc -z 127.0.0.1 3000; do sleep 1; done &)

# run test suite
mocha test/**.js

# cleanup opened processes
fuser -k -n tcp 3000