import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser';
import * as route from 'koa-route';
import {initializeQneCore, QneCore, QneOptions} from 'qne-core';

export default function init(config: QneOptions, app: Koa) {
  const core: QneCore = initializeQneCore(config)
  // API METHODS

  async function getRoot(ctx) {
    let responseFromCore = await core.getRoot();
    ctx.body = responseFromCore;
  }

  async function getQuestionnaires(ctx) {
    let responseFromCore = await core.getQuestions('test-questionnaire');
    ctx.body = responseFromCore;
  }

/*  async function putQuestionnaire(ctx){
    let payload = ctx.request.body;
    let responseFromCore = await core.putQuestionnaire(payload);
    ctx.body = responseFromCore;
  }

  async function deleteQuestionnaire(ctx,uuid){
    let responseFromCore = await core.deleteQuestionnaire(uuid);
    ctx.body = responseFromCore;
  }

  async function getQuestionnaire(ctx,uuid){
    let responseFromCore = await core.getQuestionnaire(uuid);
    ctx.body = responseFromCore;
  }

  async function deployQuestionnaire(ctx,uuid){
    let responseFromCore = await core.deployQuestionnaire(uuid);
    ctx.body = responseFromCore;
  }

  async function closeQuestionnaire(ctx,uuid){
    let responseFromCore = await core.closeQuestionnaire(uuid);
    ctx.body = responseFromCore;
  }

  async function updateQuestionnaire(ctx,uuid){
  	let payload = ctx.request.body;
    let responseFromCore = await core.updateQuestionnaire(uuid,payload);
    ctx.body = responseFromCore;
  }

  async function getQuestions(ctx,path){
  	let lang = this.query.lang;
    let responseFromCore = await core.getQuestions(path,lang);
    ctx.body = responseFromCore;
  }
*/

  // ROUTES

  app.use(bodyParser());

  app.use(route.get('/v1', getRoot));
  app.use(route.get('/v1/questionnaires', getQuestionnaires));
  /*
  app.use(route.put('/v1/questionnaires', putQuestionnaire));
  app.use(route.del('/v1/questionnaires/:uuid', deleteQuestionnaire));
  app.use(route.get('/v1/questionnaires/:uuid', getQuestionnaire));
  app.use(route.post('/v1/questionnaires/:uuid/deploy', deployQuestionnaire));
  app.use(route.post('/v1/questionnaires/:uuid/close', closeQuestionnaire));
  app.use(route.put('/v1/questionnaires/:uuid', updateQuestionnaire));
  app.use(route.get('/v1/questions/:path',getQuestions));
  */
}
