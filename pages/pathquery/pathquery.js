// index.js
const appInstance = getApp();
const crossingPath = require('../../utils/data.js').crossingPath;
const carPath = require('../../utils/data.js').carPath;
const introdution = require('../../utils/data.js').introdution;


Page({

  /**
   * 页面的初始数据
   */
  data: {
    location: appInstance.globalData.defaultCity,
    location2: appInstance.globalData.defaultCity2,
    pathstring:"",
    crossingdistance:"",
    start:"",
    end:"",
    cardistance:"",
    carpathstring:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.from);
    console.log(options.to);
    var posfrom = options.from;
    var posto = options.to;
    this.setData({ start: posfrom });
    this.setData({ end: posto });
    console.log(crossingPath);
    console.log(carPath);
    for(var i = 0;i < 441;i ++) {
      if(crossingPath[i].start == posfrom && crossingPath[i].end == posto) {
        this.setData({ pathstring: crossingPath[i].path });
        this.setData({crossingdistance: crossingPath[i].distance});
        if(parseInt(carPath[i].distance) > 999) {
          this.setData({ carpathstring: "没有路线"});
          this.setData({ cardistance: -1 });
        }
        else {
          this.setData({ carpathstring: carPath[i].path });
          this.setData({ cardistance: carPath[i].distance });
        }
      }
    }
    //加定位
    // this.getLocation();
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

