var shopsData = require('../../data/shops-data.js')
var app = getApp();
Page({
  data: {
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      swiper_img_key: shopsData.swiper_img,
      logos_more_key: shopsData.logos_more,
      logos_list_key: shopsData.logos_list
    })
  },
  waresTap: function (event) {
    wx.navigateTo({
      url: "wares/wares"
    })
  },
  wareDetailTap: function (event) {
    wx.navigateTo({
      url: "ware-detail/ware-detail"
    })
  }

})