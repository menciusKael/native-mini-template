
// let API_HOST = "http://mps.essocial.com.cn/api";
var Mock = require('mock.js')

let API_HOST = 'https://wxmi.guodong.com/api/';
let DEBUG = true; // 切换数据入口

function ajax(data = '', fn, method = "get", header = {}) {
  if (!DEBUG) {
    wx.request({
      url: config.API_HOST + data,
      method: method ? method : 'get',
      data: {},
      header: header ? header : {
        "Content-Type": "application/json"
      },
      success: function(res) {
        fn(res);
      }
    });
  } else {
    // 模拟数据
    var res = Mock.mock({
      'data': {
        // 共5条数据
        'data|5': [{   
          // 拼团mock      
          // 'id|+1': 1, // id从1开始,递增1          
          // 'img': "@image('200x100', '#4A7BF7','#fff','pic')",// 图片地址 宽200高100 
          // 'title': '@ctitle(3,8)', // 标题，3~8个字
          // 'city': "@county(true)", // 地址 省市区
          // 'stock': '@integer(0,100)', // 库存数量 0~100 
          // 'marketing_start': '@datetime()', // 开始时间
          // 'marketing_stop': '@now()', // 结束时间 2018-08-03 10:31:41
          // 'price': '@integer(100,2000)', // 价格 
          // 'original_price': '@integer(100,3000)', // 原价
          // 'name': '@ctitle(1,3)' // 商品名

          // 视频mock
          'id|+8' : 20,
          'src': 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
        }],
        'message': '获取mock数据成功',
        'status': 1
      },
      'errMsg': 'request:ok',
      'header': {},
      'statusCode': 200
    })

    fn(res);
  }
}
module.exports = {
  ajax: ajax
}