#!/usr/bin/env bash

# start test server for this test run
(node dist/server/src/index.js ../../../config-devel.json &)

# run test suite
./node_modules/.bin/mocha dist/server/test/**.js

# cleanup opened processes, assume OSX when not Linux
unamestr=`uname`
if [[ "$unamestr" == 'Linux' ]]; then
   fuser -k -n tcp 3000
else
   lsof -i tcp:3000 | grep LISTEN | awk '{print $2}' | xargs kill
fi
