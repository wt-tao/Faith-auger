// pages/technology/accessories/accessories.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tool: [
      {
        Tid: 1,
        name: 'X形状活扳手',
        img: '../../../image/pic_160.png'
      },
      {
        Tid: 2,
        name: '呆扳手',
        img: '../../../image/pic_160.png'
      },
      {
        Tid: 3,
        name: '梅花扳手',
        img: '../../../image/pic_160.png'
      },
      {
        Tid: 4,
        name: '剪刀',
        img: '../../../image/pic_160.png'
      },
      {
        Tid: 5,
        name: '钳子',
        img: '../../../image/pic_160.png'
      },
      {
        Tid: 6,
        name: '锤子',
        img: '../../../image/pic_160.png'
      },
      {
        Tid: 7,
        name: '镊子',
        img: '../../../image/pic_160.png'
      },
      {
        Tid: 8,
        name: '胶水',
        img: '../../../image/pic_160.png'
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  /**添加配件绑定*/
  add:function(){
   wx.navigateTo({
     url: '../accessoriesAdd/accessoriesAdd',
   })
  }

})