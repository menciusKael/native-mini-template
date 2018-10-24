/**
 *   basic ajax request
 */
const basicUrl = 'https://wxmi.guodong.com/api/';

export const ajax = (url, data) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: basicUrl + url,
      data,
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success(res) {
        resolve(res)
      },
      fail(err) {
        console.log(err)
        reject(err)
      }
    })
  })
}