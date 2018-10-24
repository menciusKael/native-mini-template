

Page({
  data: {
    
  },
  onLoad: function (options) {
    
  },
  onShow (){
    
    wx.showModal({
      title: '提示',
      content: '您已欠费,马上停机！',
      showCancel : false,
      confirmText : '知道了',
      confirmColor: '#442825',
      success(res){
        if(res.confirm){
          console.log('您知道了')
        }        
      }
    })

  }
})