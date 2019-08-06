'use strict';
const Service = require('egg').Service;
const data = require("../public/contentData.js");

class ContentService extends Service {
  async getData() {
    let { ctx } = this;
    return {
      code:1,
      data
    }
  }
}

module.exports = ContentService;
