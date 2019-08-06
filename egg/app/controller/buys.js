'use strict';

const Controller = require('egg').Controller;

class buysController extends Controller {
  async index() {
    const { ctx } = this;
    let res = await ctx.service.contentService.getData();
    ctx.body = res;
  }
}

module.exports = buysController;
