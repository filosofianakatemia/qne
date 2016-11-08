import * as Koa from "koa";
import {Router} from "swagger2-koa";
import {Core} from "qne-core";

export class Routing {

  constructor(private router: Router, private core: Core){
    // SETUP router
    this.router.get("/", this.getRoot);
    this.router.get("/:path", this.getQuestions);
  }

  // API METHODS

  private async getRoot(ctx) {
    let responseFromCore = await this.core.getRoot();
    ctx.body = responseFromCore;
  }

  private async getQuestions(ctx) {
    let responseFromCore = await this.core.getQuestions(ctx.params.path);
    ctx.body = responseFromCore;
  }

/* private async putQuestionnaire(ctx){
    let payload = ctx.request.body;
    let responseFromCore = await core.putQuestionnaire(payload);
    ctx.body = responseFromCore;
  }

  private async deleteQuestionnaire(ctx,uuid){
    let responseFromCore = await core.deleteQuestionnaire(uuid);
    ctx.body = responseFromCore;
  }

  private async getQuestionnaire(ctx,uuid){
    let responseFromCore = await core.getQuestionnaire(uuid);
    ctx.body = responseFromCore;
  }

  private async deployQuestionnaire(ctx,uuid){
    let responseFromCore = await core.deployQuestionnaire(uuid);
    ctx.body = responseFromCore;
  }

  private async closeQuestionnaire(ctx,uuid){
    let responseFromCore = await core.closeQuestionnaire(uuid);
    ctx.body = responseFromCore;
  }

  private async updateQuestionnaire(ctx,uuid){
  	let payload = ctx.request.body;
    let responseFromCore = await core.updateQuestionnaire(uuid,payload);
    ctx.body = responseFromCore;
  }

  private async getQuestions(ctx,path){
  	let lang = this.query.lang;
    let responseFromCore = await core.getQuestions(path,lang);
    ctx.body = responseFromCore;
  }
*/

}
