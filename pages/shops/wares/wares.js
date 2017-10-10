var app = getApp();
Page({
  data: {
  },
  onLoad: function (options) {
  },
  wareDetailTap: function (event) {
    wx.navigateTo({
      url: "../ware-detail/ware-detail"
    })
  }

})