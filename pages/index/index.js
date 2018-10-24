const app = getApp()

// 引入接口封装
import {
  getall
} from '../../utils/api.js';

Page({
  data: {   
    objArrData: [{
        imgSrc: '/images/200200.jpg',
        describe: '卫生纸无卷芯原浆批发经济',
        price: 56
      },
      {
        imgSrc: '/images/300300.jpg',
        describe: '原浆济卫生纸无卷芯',
        price: 45
      },
      {
        imgSrc: '/images/399230.jpg',
        describe: '芯原浆卫生纸无济',
        price: 23
      }
    ]
  },
  onLoad() {

  }
})