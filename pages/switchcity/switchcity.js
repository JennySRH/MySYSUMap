const city = require('../../utils/city.js');
const cityObjs = require('../../utils/city.js');
var amapFile = require('../../utils/amap-wx.js');

const appInstance = getApp();
Page({
  data: {
    searchLetter: [],
    showLetter: "",
    winHeight: 0,
    cityList: [],
    isShowLetter: false,
    scrollTop: 0,//置顶高度
    scrollTopId: '',//置顶id
    city: "定位中",
    currentCityCode: '',
    hotcityList: [{ cityCode: 1, city: '北门牌坊' },],
    commonCityList: [{ cityCode: 1, city: '北门牌坊' }, ],
    inputName: '',
    completeList: [],
    condition: false,
    currentPos: '',
    introduction:''
  },
  onLoad: function (options) {
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
    this.data.currentPos = options.id;
    this.data.introduction = options.id2;
    console.log(this.data.currentPos);
    // 生命周期函数--监听页面加载
    const searchLetter = city.searchLetter;
    const cityList = city.cityList();
    const sysInfo = wx.getSystemInfoSync();
    console.log(sysInfo);
    const winHeight = sysInfo.windowHeight;
    const itemH = winHeight / searchLetter.length;
    let tempArr = [];

    searchLetter.map(
      (item,index) => {
        // console.log(item);
        // console.log(index);
        let temp = {};
        temp.name = item;
        temp.tHeight = index * itemH;
        temp.bHeight = (index + 1) * itemH;
        tempArr.push(temp)
      }
    );
    // console.log(tempArr);
    this.setData({
      winHeight: winHeight,
      itemH: itemH,
      searchLetter: tempArr,
      cityList: cityList
    });

    this.getLocation();

  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成

  },
  onShow: function () {
    // 生命周期函数--监听页面显示

  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏

  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载

  },
  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作

  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数

  },

  clickLetter: function (e) {
    // console.log(e);
    console.log(e.currentTarget.dataset.letter)
    const showLetter = e.currentTarget.dataset.letter;
    this.setData({
      toastShowLetter: showLetter,
      isShowLetter: true,
      scrollTopId: showLetter,
    })
    // const that = this;
    // wx.showToast({
    //   title: showLetter,
    //   disabled: true,
    //   duration: 500,
    //   complete: function() {
    //     that.setData({
    //       scrollTopId: showLetter,
    //     })
    //   }
    // })
    const that = this;
    setTimeout(function () {
      that.setData({
        isShowLetter: false
      })
    }, 500)
  },
  reGetLocation: function() {
    appInstance.globalData.defaultCity = this.data.city
    console.log(appInstance.globalData.defaultCity);
    //返回首页
    wx.switchTab({
      url: '../index/index'
    })
  },
  //选择地点
  bindCity: function (e) {
    // console.log("bindCity");
    // console.log(e);
    this.setData({
      condition:true,
      city: e.currentTarget.dataset.city,
      currentCityCode: e.currentTarget.dataset.code,
      scrollTop: 0,
      completeList: [],
    })
    if(this.data.currentPos == 'des') {
      appInstance.globalData.defaultCity2 = this.data.city      
    }
    else {
      appInstance.globalData.defaultCity = this.data.city
    }
    console.log(appInstance.globalData.defaultCity)
    if(this.data.introduction == 'introduction') {
      wx.switchTab({
        url: '../introduction/introduction'
      })
    }
    else {
      wx.switchTab({
        url: '../index/index'
      })
    }

  },


  //点击热门地点回到顶部
  hotCity: function () {
    console.log("hotCity");
    this.setData({
      scrollTop: 0,
    })
  },
  bindScroll: function (e) {
  //  console.log(e.detail)
  },

  getLocation: function (e) {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        this.setData({ latitude: res.latitude, longitude: res.longitude })
        // 至善园
        // 113.391347, 23.060306
        // 113.393165, 23.057947
        console.log(res.latitude);
        console.log(res.longitude);
        if (res.latitude>23 && res.longitude < 120)
          this.setData({city:'公教楼'})
        // else
          // this.setData({:'hhh'})
      }
    })
  },
  bindBlur: function(e) {
    this.setData({
      inputName: ''
    })
  },
  bindKeyInput: function(e) {
    console.log("input: " + e.detail.value);
    this.setData({
      inputName: e.detail.value
    })
    this.auto()
  },
  auto: function () {
    let inputSd = this.data.inputName.trim()
    let sd = inputSd.toLowerCase()
    let num = sd.length
    const cityList = cityObjs.cityObjs
    console.log(cityList)
    console.log(cityList.length)
    let finalCityList = []

    let temp = cityList.filter(
      item => {
        let text = item.shorter.slice(0, num).toLowerCase()
        return (text && text == sd)
      }
    )
    //在地点数据中，添加简拼到“shorter”属性，就可以实现简拼搜索
    let tempShorter = cityList.filter(
      itemShorter => {
        if (itemShorter.shorter) {
          let textShorter = itemShorter.shorter.slice(0, num).toLowerCase()
        return (textShorter && textShorter == sd)
        }
        return
      }
    )

    let tempChinese = cityList.filter(
      itemChinese => {
        let textChinese = itemChinese.city.slice(0, num)
        return (textChinese && textChinese == sd)
      }
    )

    if (temp[0]) {
      temp.map(
        item => {
          let testObj = {};
          testObj.city = item.city
          testObj.code = item.code
          finalCityList.push(testObj)
        }
      )
      this.setData({
        completeList: finalCityList,
      })
    } else if (tempShorter[0]) {
      tempShorter.map(
        item => {
          let testObj = {};
          testObj.city = item.city
          testObj.code = item.code
          finalCityList.push(testObj)
        }
      );
      this.setData({
        completeList: finalCityList,
      })
    } else if (tempChinese[0]) {
      tempChinese.map(
        item => {
          let testObj = {};
          testObj.city = item.city
          testObj.code = item.code
          finalCityList.push(testObj)
        })
      this.setData({
        completeList: finalCityList,
      })
    } else {
      return
    }
  },
})
