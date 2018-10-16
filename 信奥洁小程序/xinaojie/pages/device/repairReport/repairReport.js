// pages/device/repairReport/repairReport.js
Page({

  /** 页面的初始数据*/
  data: {
    files: [],
    max: 120
   
  },

  /** 生命周期函数--监听页面加载*/
  onLoad: function (options) {

  },

  /** 生命周期函数--监听页面初次渲染完成*/
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

  /** 生命周期函数--监听页面卸载*/
  onUnload: function () {

  },

  /** 页面相关事件处理函数--监听用户下拉动作*/
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  },

  /**字数限定*/
  inputs: function (e) {
    // 获取输入框的内容
    var value = e.detail.value;
    // 获取输入框内容的长度
    var len = parseInt(value.length);
    if (len > this.data.max) {
      return;
    } else{
      this.setData({
        currentWordNumber: len //当前字数  
      });
    } 
  },       


  /** 图片上传*/
  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        });
      }
    })
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id,
      urls: this.data.files
    })
  }



})