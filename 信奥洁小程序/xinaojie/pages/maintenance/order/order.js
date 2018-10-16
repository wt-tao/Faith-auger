var sliderWidth = 168; 
Page({
  /** 页面的初始数据*/
  data: {
    tabs: ["维修订单", "保养订单"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    list: [
      { id: 1},
      { id: 2}
      ]
  },

  /**生命周期函数--监听页面加载*/
  onLoad: function (options) {
    var that = this;
    //设备的屏幕大小来计算tab
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
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

  /** 用户点击右上角分享*/
  onShareAppMessage: function () {
  },
   /**选项卡(tab)的切换*/
   tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },

  /**订单详情*/
  detail:function(){
    wx.navigateTo({
      url: '../orderDetail/orderDetail',
    })
  }

})