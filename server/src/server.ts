import * as Koa from 'koa'
import * as logger from 'koa-logger'
import api from './api'
import { QneOptions } from 'qne-core';

const config: QneOptions = new QneOptions(":memory:", true);

/**
 * setup Koa
 */
export const app: Koa = new Koa();

// debugging setup

if (config.debug){
  app.use(logger());
}

// add server API
api(config, app);

// listen
app.listen(3000);
console.log('listening on port 3000');
