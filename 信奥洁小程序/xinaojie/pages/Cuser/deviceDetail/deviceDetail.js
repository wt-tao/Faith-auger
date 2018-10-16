var sliderWidth = 96;
Page({
  /**页面的初始数据*/
  data: {
    tabs: ["安装记录", "维修记录", "保养记录"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    list:[
      {name: '刘思佳',  time:'2018-09-19'},
      {name: '吴欣阳',  time:'2018-09-19'}
      ],
    showModal: false,
    solve: [
      {id: 1, name: '完全解决'}, 
      {id: 2, name: '基本解决'}, 
      {id: 3, name: '没解决'}, 
    ],
    attitude:[
      { id: 1, name: '非常好' },
      { id: 2, name: '很好' },
      { id: 3, name: '一般' },
      { id: 4, name: '不好' },
      { id: 5, name: '非常不好' },
    ],
  },

  /** 生命周期函数--监听页面加载 */
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

  /**生命周期函数--监听页面初次渲染完成*/
  onReady: function () {

  },

  /**生命周期函数--监听页面显示*/
  onShow: function () {

  },

  /**生命周期函数--监听页面隐藏*/
  onHide: function () {

  },

  /**生命周期函数--监听页面卸载 */
  onUnload: function () {

  },

  /**页面相关事件处理函数--监听用户下拉动作*/
  onPullDownRefresh: function () {

  },

  /**页面上拉触底事件的处理函数*/
  onReachBottom: function () {
  },



  /**选项卡(tab)的切换*/
   tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
   /**评价弹框*/
    evaluationDialog: function () {
    this.setData({
      showModal: true
    })
  },
  
  /**隐藏评价弹框*/
  hideModal: function () {
    this.setData({
      showModal: false
    });
  },

 /**弹框提交按钮绑定*/
  handleConfirm: function () {
    this.hideModal();
    wx.showToast({
      title: '感谢本次评价',
      icon: 'success',
      duration: 1000,
    })
  } 
  
})