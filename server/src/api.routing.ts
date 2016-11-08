import * as Router from "koa-router";

export class APIRouting {

  constructor(private router: Router){
    // SETUP router
    this.router.get("/", this.getRoot);
    this.router.get("/:path", this.getQuestions);
  }

  // PUBLIC

  public getRoutes(): Router.IMiddleware {
    return this.router.routes();
  }

  // API METHODS

  private async getRoot(ctx: Router.IRouterContext, next: () => Promise<any>) {
    let responseFromCore = await ctx.state.core.getRoot();
    ctx.body = responseFromCore;
    return next();
  }

  private async getQuestions(ctx: Router.IRouterContext, next: () => Promise<any>) {
    const responseFromCore = await ctx.state.core.getQuestions(ctx.params.path);
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
