var shopsData = require('../../../data/shops-data.js')
Page({
  data: {
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      swiper_img_key: shopsData.swiper_img,
    })
  },
})