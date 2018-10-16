Page({
  /**页面的初始数据 */
  data: {
    inputShowed: false,
    inputVal: "",
    list: [
      { id: 1},
      { id: 2},
    ]
  },

  /**生命周期函数--监听页面加载*/
  onLoad: function (options) {

  },

  /** 生命周期函数--监听页面初次渲染完成*/
  onReady: function () {

  },

  /** 生命周期函数--监听页面显示*/
  onShow: function () {

  },

  /**生命周期函数--监听页面隐藏*/
  onHide: function () {

  },

  /**生命周期函数--监听页面卸载*/
  onUnload: function () {

  },

  /**页面相关事件处理函数--监听用户下拉动作*/
  onPullDownRefresh: function () {

  },

  /**页面上拉触底事件的处理函数*/
  onReachBottom: function () {
  },

   /**报修*/
  repair:function(){
    wx.navigateTo({
      url: '../repair/repair',
    })
  },
    /**保养申请按钮绑定*/
  maintenance: function () {
    wx.navigateTo({
      url: '../maintenance/maintenance',
    })
  },
   /**设备申请按钮绑定*/
  detail: function () {
    wx.navigateTo({
      url: '../deviceDetail/deviceDetail',
    })
  },
  /**搜索*/
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
})