Page({
  /** 页面的初始数据 */
  data: {
  },

  /** 生命周期函数--监听页面加载*/
  onLoad: function(options) {},

  /** 生命周期函数--监听页面初次渲染完成 */
  onReady: function() {},

  /** 生命周期函数--监听页面显示*/
  onShow: function() {},

  /** 生命周期函数--监听页面隐藏*/
  onHide: function() {},

  /** 生命周期函数--监听页面卸载*/
  onUnload: function() {},

  /**登录*/
  login: function () { 
    wx.showToast({
      title: '登录加载中',
      icon: 'loading',
      duration: 1000000,
      success:function(){
        setTimeout(function () {
        },1000000)
        wx.switchTab({
          url: '../Cuser/myDevice/myDevice',
        })
      }
    });
  }  
})