var app = getApp()

// 1. 使用mock 引入
var API = require('../../mock/api.js');

Page({
  data: {

  },
  onLoad: function (options) {
    
    var that = this;
    // 2. 使用mock
    API.ajax('', function (res) {      
      console.log(res)
      let list = res.data.data;
      that.setData({
        list
      })
    });

  }
})