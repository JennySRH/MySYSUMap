 var amapFile = require('../../utils/amap-wx.js');

// index.js
const appInstance = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    location: appInstance.globalData.defaultCity,
    location2: appInstance.globalData.defaultCity2,
    currentPos: appInstance.globalData.currentPos,
    latitude: "",
    longitude: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //加定位
    // this.getLocation();
    var myAmapFun = new amapFile.AMapWX({ key: '5da9b4aedbd7af72590c01a5098c33eb' });
    myAmapFun.getRegeo({
      success: function (data) {
        //成功回调
      },
      fail: function (info) {
        //失败回调
        console.log(info)
      }
    })
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        var latitude = res.latitude
        var longitude = res.longitude
        this.setData({ latitude: latitude, longitude: longitude })
        if (latitude < 130 && longitude > 30)
          this.setData({location: '公教楼' })

      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      location: appInstance.globalData.defaultCity,
      location2: appInstance.globalData.defaultCity2,
      currentPos: appInstance.globalData.currentPos
    })

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})









// var amapFile = require('../../utils/amap-wx.js');
// Page({
//   onLoad: function () {
//     var that = this;
//     var myAmapFun = new amapFile.AMapWX({ key: '5da9b4aedbd7af72590c01a5098c33eb' });
//     myAmapFun.getRegeo({
//       success: function (data) {
//         //成功回调
//       },
//       fail: function (info) {
//         //失败回调
//         console.log(info)
//       }
//     })
//   },

//   onReady: function () {
//     var context = wx.createCanvasContext('myCanvas')
//     // draw position
//     context.setStrokeStyle("#000000")
//     context.setLineWidth(2)
//     context.setFontSize(20)
//     context.strokeRect(150, 20, 90, 40)
//     context.fillText("北门牌坊",155,50)
//     // draw path
//     context.setStrokeStyle("blue")
//     context.setLineWidth(10)
//     context.moveTo(160, 100)
//     context.lineTo(85, 80)
//     context.stroke()
//     context.draw()

//   },

//   data: {
//     latitude: "",
//     longitude: "",
//     position: "",
//     myCanvas:"asdf"
//   },
//   GPSsubmit: function (e) {
//     wx.getLocation({
//       type: 'wgs84',
//       success: (res) => {
//         var latitude = res.latitude
//         var longitude = res.longitude
//         var speed = res.speed
//         var accuracy = res.accuracy
//         this.setData({ latitude: latitude, longitude: longitude })
//         if(latitude < 130 && longitude > 30)
//           this.setData({position:'sysu'})
//         else
//           this.setData({position:'hhh'})
//       }

//     })
//   },
//   northGate: function(event) {
//     this.testfun(event)    
//   },
//   testfun: function(event) {
//     var a = event.currentTarget.id
//     var context = wx.createCanvasContext('myCanvas')
//     context.setStrokeStyle("red")
//     console.log(a)
//   }
// })

